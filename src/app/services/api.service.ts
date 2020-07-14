import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const HttpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'dataType': 'JSON'
    })
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "";
  constructor(private http: HttpClient) { }

  allRegion(){
    return this.http.get("http://localhost:8000/api/apiRegions", HttpOptions);
  }

  getPharmacieByCommune(tab){
    return this.http.post<any>("http://localhost:8000/api/pharmaciesApi",tab, HttpOptions);
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
  //       {id: 1 ,name: 'Bicis' ,logo:'',type:2},
  //       {id: 2 ,name: 'ECOBANK' ,logo:'',type:2},
  //       {id: 3 ,name: 'BOA' ,logo:'',type:2},
  //       {id: 4 ,name: 'ORANGE' ,logo:'',type:3},
  //       {id: 5 ,name: 'TIGO' ,logo:'',type:3},
  //       {id: 6 ,name: 'EXPRESSO' ,logo:'',type:3},
  //       {id: 7 ,name: 'SDE' ,logo:'',type:6},
  //       {id: 8 ,name: 'SENELEC' ,logo:'',type:6},
  //   ];
  //   return mystructure;
  // }
}
