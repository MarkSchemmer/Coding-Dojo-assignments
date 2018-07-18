import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http : HttpClient) {

   }

   url = 'http://api.openweathermap.org/data/2.5/weather?q='
   apiKey = ',us&&appid=1257ca04186493c1b0edc5d7ce94acbf'
   getCityWeatherApi(city){
     return this._http.get(this.url + city + this.apiKey)
   }

}
