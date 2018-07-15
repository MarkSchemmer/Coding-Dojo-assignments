import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
  cakeObj : any
  constructor(private _http: HttpService) {
      this.cakeObj = {
        name : '',
        url : '',
      }
  }

  resetObjs(){
    this.cakeObj = {
      name : '',
      url : ''
    }
  }

  getCakes(){
    this._http.allCakes()
      .subscribe(data => {
        console.log(data)
      })
  }

  createCake(){
    this._http.createCake(this.cakeObj)
      .subscribe(data => {
        this.resetObjs()
        this.getCakes()
      })
  }

}
