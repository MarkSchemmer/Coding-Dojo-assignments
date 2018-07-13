import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {
    this.getAuthors()
  }




  getAuthors(){
    this._http.get('/api/authors')
      .subscribe(data => console.log(data))
  }
}
