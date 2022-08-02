import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WashEntryFormRoutingModule } from './wash-entry-form-routing.module';
import { WashEntryFormComponent } from './wash-entry-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [WashEntryFormComponent],
  imports: [
    CommonModule,
    WashEntryFormRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class WashEntryFormModule {}
