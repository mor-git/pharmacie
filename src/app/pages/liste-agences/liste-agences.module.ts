import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeAgencesPageRoutingModule } from './liste-agences-routing.module';

import { ListeAgencesPage } from './liste-agences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeAgencesPageRoutingModule
  ],
  declarations: [ListeAgencesPage]
})
export class ListeAgencesPageModule {}
