import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosAgencePageRoutingModule } from './infos-agence-routing.module';

import { InfosAgencePage } from './infos-agence.page';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'; 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyCYxy4ANKBuAs9kD8Xd9nEV5BDKV14e-uYS'
      apiKey: 'AIzaSyDJby-hPhgoq4hIhiwKiHYvYmEUn74qnBw'
    }),
    AgmDirectionModule, 
    IonicModule,
    InfosAgencePageRoutingModule
  ],
  declarations: [InfosAgencePage]
})
export class InfosAgencePageModule {}
