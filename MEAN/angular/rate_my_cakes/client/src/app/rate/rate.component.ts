import { Component, OnInit } from '@angular/core'
import { HttpService } from '../http.service'

import { FormBuilder, FormGroup, FormControl } from '@angular/forms'


@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {

  cakes : any

  rateObj : any


  message = false

  myForm : FormGroup

  constructor(private _http : HttpService, 
    private fb : FormBuilder,
    private child : ) {


      this.myForm = this.fb.group({
        stars : 0,
        comment : ''
      })

      this.myForm.valueChanges.subscribe(console.log)


      this._http.Currentcakes.subscribe(cakes => this.cakes = cakes)

      this.rateObj = {
        stars: '',
        comment : ''
      }
  }

  // AddRatingToCake(id){
  //     this._http.rateCake(id, this.rateObj)
  //       .subscribe(data => {
  //         this.resetRate()
  //         this._http.getcakes()
  //         this.showMes(id)
  //         console.log(data)
  //       })
  // }

  resetRate(){
    this.rateObj = {
      stars : '',
      comment : ''
    }
  }

  showMes(id){
      this._http.getCake(id).subscribe(data => {
        this.message = data
      })
  }

  onSubmit(value:string, id:Number){
    console.log(id)
    console.log(value)
    this._http.rateCake(id, value)
      .subscribe(data => {
          this.myForm = this.fb.group({
            stars : 0,
            comment : ''
          })
      })
  }

}
