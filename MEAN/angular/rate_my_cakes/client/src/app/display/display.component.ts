import { Component, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @Input() message : any

  obj : any

  amount : Number

  constructor(private _http : HttpService) {
   }


  show(id){
    let amt = 0
    this._http.getCake(id)
      .subscribe(data => {
        this.obj = data
        this.obj.ratings.forEach(x => {
            amt += x.stars
        })
        this.amount = amt/this.obj.ratings.length
      })
  }

}
