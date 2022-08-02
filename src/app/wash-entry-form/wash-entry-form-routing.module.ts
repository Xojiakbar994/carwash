import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WashEntryFormComponent } from './wash-entry-form.component';

const routes: Routes = [{ path: '', component: WashEntryFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WashEntryFormRoutingModule { }
