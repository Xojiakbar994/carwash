import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WashEntryListRoutingModule } from './wash-entry-list-routing.module';
import { WashEntryListComponent } from './wash-entry-list.component';


@NgModule({
  declarations: [
    WashEntryListComponent
  ],
  imports: [
    CommonModule,
    WashEntryListRoutingModule
  ]
})
export class WashEntryListModule { }
