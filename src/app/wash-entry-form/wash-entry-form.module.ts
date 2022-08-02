import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WashEntryFormRoutingModule } from './wash-entry-form-routing.module';
import { WashEntryFormComponent } from './wash-entry-form.component';


@NgModule({
  declarations: [
    WashEntryFormComponent
  ],
  imports: [
    CommonModule,
    WashEntryFormRoutingModule
  ]
})
export class WashEntryFormModule { }
