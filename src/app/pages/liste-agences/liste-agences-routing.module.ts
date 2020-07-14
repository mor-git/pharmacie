import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeAgencesPage } from './liste-agences.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAgencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeAgencesPageRoutingModule {}
