import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  typeStructures : any = [];
  structures : any = [];
  regionsAnDept: any;
  allRegions : any = [];
  communes :any;
  struct : any;
  ville :any;
  pharmacies :any = [];
  structureForTypeStructure : any = [];
  constructor(private apiService : ApiService,private route: Router, private loadingControl : LoadingController) { }

  ngOnInit() {
   
  }
  async listRegion(){
    const loading = await this.loadingControl.create({
      duration : 20000,
      message : "Patientez s'il vous plait" 
    }); 
    await loading.present();
    this.apiService.allRegion().subscribe(res=>{
      this.allRegions = res;
      console.log(res);
      loading.dismiss();
    });
    // const recup = this.apiService.allRegion();
    // recup.finally(()=>{
    //   loading.dismiss();
    // }).then(res=>{
    //   console.log(JSON.parse(res.data));
    //   this.allRegions = JSON.parse(res.data);
      
      
    // });
  }
  ionViewDidEnter(){ 
    this.listRegion();
    }

  getRegion(ev){
    this.communes = this.allRegions.find(x=>x.id == ev.target.value);
    this.communes = this.communes.communes;

    console.log(this.communes);
    
  }

  recherche(){
    let infos = {
    id: this.ville,
    }
    this.apiService.getPharmacieByCommune(infos).subscribe(res=>{
        console.log(res);
    });
    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(infos),  
      }
    };
    this.route.navigate(['/liste-agences'], navigationExtras);
  }

}
