import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosAgencePage } from './infos-agence.page';

const routes: Routes = [
  {
    path: '',
    component: InfosAgencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosAgencePageRoutingModule {}
