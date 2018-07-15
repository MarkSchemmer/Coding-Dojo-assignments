import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createCake(cake){
     return this._http.post('/api/cakes/', cake)
  }

  allCakes(){
    return this._http.get('/api/cakes')
  }

  rateCake(id, obj){
     return this._http.post('/api/rates/'+id, obj)
  }

  getCake(id){
    return this._http.get('/api/cakes/'+id)
  }

}
