import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'add',
    loadChildren: () => import('./wash-entry-form/wash-entry-form.module').then((m) => m.WashEntryFormModule),
  },
  {
    path: 'list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./wash-entry-list/wash-entry-list.module').then((m) => m.WashEntryListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
