import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WashEntryListComponent } from './wash-entry-list.component';

const routes: Routes = [{ path: '', component: WashEntryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WashEntryListRoutingModule { }
