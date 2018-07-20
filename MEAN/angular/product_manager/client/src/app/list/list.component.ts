import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products : any

  constructor(
    private _http : HttpService
  ) {
      this._http.allProducts()
        .subscribe(data => {
          this.products = data
        })
   }

   goEdit(id){
     this._http.goEdit(id)
   }

   delete(id){
     this._http.deleteProductById(id)
      .subscribe(data => {
        if('errors' in data){
              console.log(`errors in ${data}`)
        } else {
            console.log(`success in ${data}`)
            this._http.allProducts().subscribe(data => {
              this.products = data
            })
        }
      })
   }

  ngOnInit() {
  }

}
