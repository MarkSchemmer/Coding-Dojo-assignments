import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  toBeCreated : any

  justCreated : any

  errors : any

  constructor(private _http : HttpService) {
      this.toBeCreated = {
        title : '',
        price : '',
        url : ''
      }
   }

   createProduct(){
     this.errors = {}
      this._http.createProduct(this.toBeCreated)
        .subscribe(data => {
          if('errors' in data){
            console.log(data['errors'])
            for(let er in data['errors']){
              this.errors[er] = data['errors'][er]['message']
            }
            console.log(this.errors)
          } else {
              console.log(` success in ${data}`)
              this.justCreated = data
              this.reset()
              this._http.goList()
          }
        })
   }

   cancelCreate(){
     this._http.goList()
   }

   reset(){
     this.toBeCreated = {
       title : '',
       price : '',
       url : '',
     }
   }

  ngOnInit() {
  }

}
