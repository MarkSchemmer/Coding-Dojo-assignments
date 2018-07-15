import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {

  cakes : any

  rateObj : any


  message = false

  constructor(private _http : HttpService) {
       this._http.allCakes().subscribe(data => {
          this.cakes = data
          console.log(data)
      })

      this.rateObj = {
        stars: '',
        comment : ''
      }
  }

  AddRatingToCake(id){
      this._http.rateCake(id, this.rateObj)
        .subscribe(data => {
          this._http.allCakes()
          this.resetRate()
          console.log(data)
        })
  }

  resetRate(){
    this.rateObj = {
      stars : '',
      comment : ''
    }
  }

  showMes(id){
    this.message = id
  }

}
