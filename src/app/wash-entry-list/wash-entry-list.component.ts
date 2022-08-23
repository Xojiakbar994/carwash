import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CAR_BODY_TYPES } from '../models/car-body-types';
import { SERVICE_TYPES } from '../models/service-types';

export interface WashEntry {
  washer: string;
  date: string;
  plateNumber: string;
  model: string;
  color: string;
  carBodyType: string;
  serviceType: string;
  price: number;
}

@Component({
  selector: 'app-wash-entry-list',
  templateUrl: './wash-entry-list.component.html',
  styleUrls: ['./wash-entry-list.component.scss'],
})
export class WashEntryListComponent implements AfterViewInit {
  carBodyTypes = CAR_BODY_TYPES;
  serviceTypes = SERVICE_TYPES;

  displayedColumns: string[] = [
    'index',
    'washer',
    'date',
    'plateNumber',
    'model',
    'color',
    'carBodyType',
    'serviceType',
    'price',
    'actions',
  ];
  dataSource = new MatTableDataSource<WashEntry>();

  constructor(private liveAnnouncer: LiveAnnouncer, private firestore: Firestore, private snackBar: MatSnackBar) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    // создаём ссылку в коллекции washEntries в firebase
    const washEntriesRef = collection(this.firestore, `washEntries`);

    // делаем запрос к коллекции в firebase
    collectionData(washEntriesRef, { idField: 'uid' }).subscribe((entries) => {
      this.dataSource.data = entries as WashEntry[];
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  getTotalCost() {
    return this.dataSource.data.map((t) => t.price).reduce((acc, value) => acc + value, 0);
  }

  removeItem(uid: string) {
    if (confirm("Rostan o'chirmoqchimisiz?")) {
      // создаём ссылку в washEntries в firebase
      const washEntryRef = doc(this.firestore, `washEntries/${uid}`);

      deleteDoc(washEntryRef);

      this.snackBar.open("O'chirildi", 'OK', { duration: 2000 });
    }
  }
}
