import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private cakeImageSource = new BehaviorSubject<any>({})

  cakeImage = this.cakeImageSource.asObservable()

  

  private cakeSource = new BehaviorSubject<any>([])

  Currentcakes = this.cakeSource.asObservable()


  constructor(private _http: HttpClient) {

    this.allCakes().subscribe(data => {
      this.cakeSource.next(data)
    })

   }

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

  getcakes(){
    this.allCakes().subscribe(data =>{
            this.cakeSource.next(data)      
    })
  }

}
