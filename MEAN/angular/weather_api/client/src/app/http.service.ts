import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) {

   }


}
