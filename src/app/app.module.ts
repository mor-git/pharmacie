import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HTTP} from '@ionic-native/http/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {GoogleMaps} from "@ionic-native/google-maps";
import { AgmCoreModule } from '@agm/core';
import { IonicStorageModule } from '@ionic/storage';
import { AgmDirectionModule } from 'agm-direction'; 
import {InfosAgencePageModule} from '../app/pages/infos-agence/infos-agence.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJby-hPhgoq4hIhiwKiHYvYmEUn74qnBw'
    }),
    AgmDirectionModule, 
    AppRoutingModule,HttpClientModule,InfosAgencePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    Geolocation,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
