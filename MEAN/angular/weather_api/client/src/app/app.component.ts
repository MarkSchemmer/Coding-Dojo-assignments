
// for event....
// .target.firstChild

//

import { Component } from '@angular/core'
import { HttpService } from './http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  city : string
  cityJson : any
  constructor(private _http : HttpService){

  }

    getStats(city){
      this._http.getCityWeatherApi(city)
        .subscribe(data => {
          console.log(data)
          this.cityJson = data
        })
  }
}
