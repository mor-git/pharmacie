import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, LoadingController } from '@ionic/angular';
import {InfosAgencePage} from '../infos-agence/infos-agence.page';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-liste-agences',
  templateUrl: './liste-agences.page.html',
  styleUrls: ['./liste-agences.page.scss'],
})
export class ListeAgencesPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private modalCtr : ModalController,
     private apiService : ApiService, private loadingCtrl : LoadingController) { }
 ville : any ;
 structure : any;
 lisetAgences :any = [];
 lisetAgences2 :any = [];
  ngOnInit() {
  }
 
  //  ionViewDidEnter(){
  //   this.lisetAgences = [
  //     {name: "agence 1" , nomStructure:"Bicis" , ville : "Malem-Hodar" , logo :"bicis.jpg"},
  //     {name: "agence 2" , nomStructure:"Bicis" , ville : "Malem-Hodar" , logo :"bicis.jpg"},
  //     {name: "agence 3" , nomStructure:"Bicis" , ville : "Malem-Hodar" , logo :"bicis.jpg"},
  //     {name: "agence 4" , nomStructure:"Bicis" , ville : "Malem-Hodar" , logo :"bicis.jpg"},
  //     {name: "agence 1" , nomStructure:"BOA" , ville : "Malem-Hodar" , logo :"boa.jpg"},
  //     {name: "agence 2" , nomStructure:"BOA" , ville : "Malem-Hodar" , logo :"boa.jpg"}, 
  //     {name: "agence 3" , nomStructure:"BOA" , ville : "Malem-Hodar" , logo :"boa.jpg"},
  //     {name: "agence 4" , nomStructure:"BOA" , ville : "Malem-Hodar" , logo :"boa.jpg"},
  //     {name: "agence 5" , nomStructure:"BOA" , ville : "Malem-Hodar" , logo :"boa.jpg"}, 
  //     {name: "agence 6" , nomStructure:"BOA" , ville : "Malem-Hodar" , logo :"boa.jpg"},
  //     {name: "agence 7" , nomStructure:"BOA" , ville : "Malem-Hodar" , logo :"boa.jpg"},
  //     {name: "agence 8" , nomStructure:"BOA" , ville : "Malem-Hodar" , logo :"boa.jpg"},
  //     {name: "agence 9" , nomStructure:"BOA" , ville : "Malem-Hodar" , logo :"boa.jpg"}
  //   ]
  //   this.activatedRoute.queryParams.subscribe(params => {
  //        if(params){
  //          let infos = JSON.parse(params.data);
  //          this.ville = infos.ville;
  //          this.structure= infos.structure;
  //          this.lisetAgences.forEach(el => {
  //             if(el.nomStructure == this.structure && el.ville == this.ville)
  //             {
  //               this.lisetAgences2.push(el);
  //             }
  //          });
  //          console.log(this.lisetAgences2);
           
  //        }
  //   });
  //  }


   ionViewDidEnter(){
     this.lesPharmacies();
   }

   async lesPharmacies(){
    const loading = await this.loadingCtrl.create({
        duration : 20000,
        message : "Patientez s'il vous plait"
    });

   // await loading.present();

    this.activatedRoute.queryParams.subscribe(params => {
      let infos = JSON.parse(params.data);

      // this.apiService.getPharmacieByCommune(infos).subscribe(res=>{
      //   this.lisetAgences2 = res;
      //   console.log(this.lisetAgences2);
      //   loading.dismiss();
      // });
      let mystructure :any = [
        {id: 1 ,name: 'Pharmacie 1' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:1},
        {id: 2 ,name: 'Pharmacie 2' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:0},
        {id: 3 ,name: 'Pharmacie 3' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:1},
        {id: 4 ,name: 'Pharmacie 4' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:0},
        {id: 5 ,name: 'Pharmacie 5' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:1},
        {id: 6 ,name: 'Pharmacie 6' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:0},
        {id: 7 ,name: 'Pharmacie 7' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:1},
        {id: 8 ,name: 'Pharmacie 8' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:1},
        {id: 7 ,name: 'Pharmacie 9' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:1},
        {id: 8 ,name: 'Pharmacie 10' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555,status:1},
    ];
    this.lisetAgences2 = mystructure;

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
