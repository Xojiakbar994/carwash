import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { WashEntryListRoutingModule } from './wash-entry-list-routing.module';
import { WashEntryListComponent } from './wash-entry-list.component';

@NgModule({
  declarations: [WashEntryListComponent],
  imports: [CommonModule, MatTableModule, MatSortModule, WashEntryListRoutingModule],
})
export class WashEntryListModule {}
