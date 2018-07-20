import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '../../../node_modules/@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product : any

  errors : any 

  constructor(private _router : Router,
              private _http : HttpService,
              private _route : ActivatedRoute

  ) {

    this.product = {
      title : '',
      price : '',
      url : ''
    }

    this._route.params
        .subscribe((params: Params) => {
          console.log(params['id'])
          this._http.getProductById(params['id'])
            .subscribe(data => {
              this.product = data
            })
        })

   }

   editProduct(){
     this.errors = {}
     this._http.updateProduct(this.product)
        .subscribe(data => {
          if('errors' in data){
            console.log(data['errors'])
            for(let er in data['errors']){
              this.errors[er] = data['errors'][er]['message']
            }
            console.log(this.errors)
          } else {
                console.log(`success in ${data}`)
                this._http.goList()
          }
        })
   }

   backToList(){
     this._http.goList()
   }

  ngOnInit() {
  }

}
