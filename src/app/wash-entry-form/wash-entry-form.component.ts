import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';

@Component({
  selector: 'app-wash-entry-form',
  templateUrl: './wash-entry-form.component.html',
  styleUrls: ['./wash-entry-form.component.scss'],
})
export class WashEntryFormComponent implements OnInit {
  entryForm = new FormGroup({
    washer: new FormControl('Alish', Validators.required),
    date: new FormControl(this.getCurrentDate(), Validators.required),
    plateNumber: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    color: new FormControl(''),
    carBodyType: new FormControl('', Validators.required),
    serviceType: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
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
