import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Firestore, collection } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

const PRICE_TABLE = [
  [11000, 21000, 31000, 41000, 51000, 61000],
  [12000, 22000, 32000, 42000, 52000, 62000],
  [13000, 23000, 33000, 43000, 53000, 63000],
];

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
    carBodyType: new FormControl(null, Validators.required),
    serviceType: new FormControl(null, Validators.required),
    price: new FormControl(0, Validators.required),
  });

  constructor(private firestore: Firestore, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.entryForm.valueChanges.subscribe((values) => {
      if (values.carBodyType != null && values.serviceType != null) {
        const price = PRICE_TABLE[values.carBodyType][values.serviceType];
        this.entryForm.controls.price.setValue(price, { onlySelf: true });
      }
    });
  }

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

    this.snackBar.open('Sizning malumotlaringiz muvafaqiyatli jonatildi', 'ok', { duration: 2000 });

    this.router.navigateByUrl('list');
  }
}
