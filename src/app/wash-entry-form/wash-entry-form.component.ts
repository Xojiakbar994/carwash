import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-wash-entry-form',
  templateUrl: './wash-entry-form.component.html',
  styleUrls: ['./wash-entry-form.component.scss'],
})
export class WashEntryFormComponent implements OnInit {
  entryForm = new FormGroup({
    washer: new FormControl('Alish'),
    date: new FormControl('10/08/2022'),
    plateNumber: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    carBodyType: new FormControl(''),
    serviceType: new FormControl(''),
    price: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  save() {
    //save the new document into firebase storage
    console.log('ozim tushunadigan tekst');
  }
}
