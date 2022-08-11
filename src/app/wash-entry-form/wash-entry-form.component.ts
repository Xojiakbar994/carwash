import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';

@Component({
  selector: 'app-wash-entry-form',
  templateUrl: './wash-entry-form.component.html',
  styleUrls: ['./wash-entry-form.component.scss'],
})
export class WashEntryFormComponent implements OnInit {
  entryForm = new FormGroup({
    washer: new FormControl('Alish'),
    date: new FormControl(this.getCurrentDate()),
    plateNumber: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    carBodyType: new FormControl(''),
    serviceType: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {}

  getCurrentDate() {
    const today = new Date();
    return today.toLocaleDateString();
  }

  save() {
    //save the new document into firebase storage
    console.log('ozim tushunadigan tekst');
    console.log(this.entryForm.value);

    // создаём ссылку в коллекции washEntries в firebase
    const washEntriesRef = collection(this.firestore, `washEntries`);

    //создаём документ в firebase
    addDoc(washEntriesRef, this.entryForm.value);
  }
}
