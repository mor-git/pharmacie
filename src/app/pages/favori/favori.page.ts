import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import {InfosAgencePage} from '../infos-agence/infos-agence.page';
@Component({
  selector: 'app-favori',
  templateUrl: './favori.page.html',
  styleUrls: ['./favori.page.scss'],
})
export class FavoriPage implements OnInit {
  lisetAgences2 : any;
  constructor(private storage : Storage,private modalCtr : ModalController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.storage.get('favori').then(res=>{
      this.lisetAgences2 = res;
    });
  }
  async showAgence(item){
    console.log(item);
    const modal = await this.modalCtr.create({
     component : InfosAgencePage,
     backdropDismiss : false,
     componentProps : {
       infos : item,
     }
    
   });

   
   modal.onWillDismiss().then(dataR=>{
     console.log("comm" ,dataR);
      if(dataR){
     
      }
     
  
   });
   return await modal.present().then(rs=>{
     console.log(rs);
     
   });
    
  }

}
