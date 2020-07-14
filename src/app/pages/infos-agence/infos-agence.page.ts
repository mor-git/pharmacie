import { Component, OnInit,Input,ViewChild, ElementRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import {GoogleMap,
        } from "@ionic-native/google-maps/ngx";
declare var google;
@Component({
  selector: 'app-infos-agence',
  templateUrl: './infos-agence.page.html',
  styleUrls: ['./infos-agence.page.scss'],
})
export class InfosAgencePage implements OnInit {
  //@ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;
  latitude:any;
  longitude:any;
  favori : boolean = false;
  infosTmp : any ;
  public origin:any;
  public destination:any;
  showMap : boolean = false;
  constructor(private modaCtrl : ModalController,
              private toast : ToastController ,
              private storage : Storage,
              private geolocation: Geolocation) { }
  @Input() public infos : any;
  ngOnInit() {
    console.log("ici" ,this.infos);
    
  }
  ionViewDidEnter(){
    this.storage.get('favori').then(res=>{
       res.forEach(el => {
            if(el.name ===  this.infos.name){
              this.favori = true;
            }
       });
    });
    
  }
  load() {
    this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude= resp.coords.latitude;
        this.longitude= resp.coords.longitude;
        console.log(this.latitude);
        
        this.origin = { lat: this.latitude, lng: this.longitude };
        this.destination = { lat: 14.7030441, lng: -17.4638227 };
        //const latLng = new google.maps.LatLng(lat, lng);
        // this.map = new google.maps.Map(document.getElementById('map_canvas'), {
        //     zoom: 14,
        //     center: latLng,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP,
        //     mapTypeControl: false
        // });

    });
 }
  geoLocaliser(){
   this.showMap = true;
  // this.displayGoogleMap();
  //   let myLoc = {name : 'test' ,lat :28.6117993, long : 77.2194934};
  // this.addMarkersToMap(myLoc);
  this.load();
  }
  closeMap(){
    this.showMap = false;
  }
  closeModal(){
    this.infos = {};
    this.modaCtrl.dismiss();
  }
  // displayGoogleMap() {
  //   const latLng = new google.maps.LatLng(28.6117993, 77.2194934);

  //   const mapOptions = {
  //     center: latLng,
  //     disableDefaultUI: true,
  //     zoom: 4,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };

  //   this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  // }
  addMarkersToMap(museum) {
    const position = new google.maps.LatLng(museum.lat, museum.long);
    const museumMarker = new google.maps.Marker({ position, title: museum.name });
    museumMarker.setMap(this.map);
  }

  async presenToast(message){
    const toast = await this.toast.create({
      message : message,
      duration : 1000,
      position: "middle"
    });
    toast.present();
  }


  // ajouter favori
  addFavori(item){
    //this.storage.clear();
    
    this.favori = true;
    this.storage.get('favori').then(res=>{
      console.log(res);
      
      if(res !== null){
       
        console.log('tt2' ,item);
        res.push(item);
        console.log('tt1' ,res);
        this.storage.set('favori' , res );
      }else{
        let mesfavori : any = [item];
        console.log('tt3' ,mesfavori);
        this.storage.set('favori' , mesfavori );
      }
      this.storage.get('favori').then(res=>{
        console.log('ajout2' , res);
        
      });
    });
    
   
    this.presenToast('Agence ajouté dans favori');
  }

  //delete favori 
  deleteFavori(item)
  {
   
    
    this.favori = false;
   
    this.storage.get('favori').then(res=>{
      if(res){

        let tmp : any = [];
        res.forEach(el => {
        if(  el.name != this.infos.name)
         {
            tmp.push(el)
         }
        });
        this.storage.set('favori',tmp);
        this.storage.get('favori').then(res=>{
          console.log('delete' , res);
          
        });
      }
    });
    
  
    this.presenToast('Agence rétiré des favori')
  }
}
