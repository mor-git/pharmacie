import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';
const HttpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      //'dataType': 'JSON'
    })
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "";
  constructor(private http: HttpClient,private http2 : HTTP) { }

  allRegion() : Observable<any>{
    return this.http.get("http://192.168.1.13:8080/api/apiRegions", {});
  }
  // allRegion(){
  //   return this.http2.get("http://localhost:8000/api/apiRegions", {}, {});
  // }
  getPharmacieByCommune(tab:any) :Observable<any>{
    return this.http.post<any>("http://192.168.1.13:8080/api/pharmaciesApi",tab, HttpOptions);
  }

  // allTypestructure(credentiel): Observable<[]> {
  //   //return this.http.post<any>(this.url, credentiel, HttpOptions);
  //   let mystructure :any = [
  //       {id: 2 , type:'Banque'},
  //       {id: 3 , type:'Entreprise'},
  //       {id: 6 , type:'Societé commercial'},
  //   ];
  //   return mystructure;
  // }


  // allStructure(credentiel): Observable<any> {
  //   //return this.http.post<any>(this.url, credentiel, HttpOptions);
  //   let mystructure :any = [
  //       {id: 1 ,name: 'Pharmacie 1' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555},
  //       {id: 2 ,name: 'Pharmacie 2' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555},
  //       {id: 3 ,name: 'Pharmacie 3' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555},
  //       {id: 4 ,name: 'Pharmacie 4' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555},
  //       {id: 5 ,name: 'Pharmacie 5' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555},
  //       {id: 6 ,name: 'Pharmacie 6' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555},
  //       {id: 7 ,name: 'Pharmacie 7' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555},
  //       {id: 8 ,name: 'Pharmacie 8' ,adresse:'thies 3',telephone:"77 236 96 25",lat:192005,lng:822555},
  //   ];
  //   return mystructure;
  // }
}
