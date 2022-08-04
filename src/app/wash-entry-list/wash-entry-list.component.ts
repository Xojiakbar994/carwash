import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

export interface WashEntry {
  washer: string;
  date: string;
  plateNumber: string;
  model: string;
  color: string;
  carBodyType: string;
  serviceType: string;
  price: string;
}

const ELEMENT_DATA: WashEntry[] = [
  {
    date: '04.08.2022',
    washer: 'Alish',
    plateNumber: '01L230GB',
    model: 'Cobalt',
    color: 'white',
    carBodyType: 'sedan',
    serviceType: 'polniy',
    price: '50000',
  },
  {
    date: '04.08.2022',
    washer: 'Botir',
    plateNumber: '01L889GB',
    model: 'Lacetti',
    color: 'white',
    carBodyType: 'sedan',
    serviceType: 'polniy',
    price: '50000',
  },
  {
    date: '02.08.2022',
    washer: 'Qodir',
    plateNumber: '01L851GB',
    model: 'Matiz',
    color: 'white',
    carBodyType: 'sedan',
    serviceType: 'polniy',
    price: '30000',
  },
  {
    date: '01.08.2022',
    washer: 'Ali',
    plateNumber: '01L456GB',
    model: 'Cobalt',
    color: 'white',
    carBodyType: 'sedan',
    serviceType: 'polniy',
    price: '50000',
  },
  {
    date: '03.08.2022',
    washer: 'Hayrulla',
    plateNumber: '01L987GB',
    model: 'Nexia',
    color: 'white',
    carBodyType: 'sedan',
    serviceType: 'polniy',
    price: '45000',
  },
];

@Component({
  selector: 'app-wash-entry-list',
  templateUrl: './wash-entry-list.component.html',
  styleUrls: ['./wash-entry-list.component.scss'],
})
export class WashEntryListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'washer',
    'date',
    'plateNumber',
    'model',
    'color',
    'carBodyType',
    'serviceType',
    'price',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer, private firestore: Firestore) {}

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
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
