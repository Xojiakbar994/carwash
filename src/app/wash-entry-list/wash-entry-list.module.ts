import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { WashEntryListRoutingModule } from './wash-entry-list-routing.module';
import { WashEntryListComponent } from './wash-entry-list.component';

@NgModule({
  declarations: [WashEntryListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    WashEntryListRoutingModule,
  ],
})
export class WashEntryListModule {}
