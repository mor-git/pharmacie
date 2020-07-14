import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriPageRoutingModule } from './favori-routing.module';

import { FavoriPage } from './favori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriPageRoutingModule
  ],
  declarations: [FavoriPage]
})
export class FavoriPageModule {}
