import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '../../../node_modules/@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authors : any

  constructor(private _http : HttpService , private _router : Router) {
      this.getAuthors()
   }

  ngOnInit() {
  }

  getAuthors(){
    this._http.getAllAuthors()
      .subscribe(data => {
        console.log(data)
        this.authors = data
      })
  }

  deleteAuth(id){
      this._http.deleteAuthor(id)
        .subscribe(data => {
          this.getAuthors()
        })
  }

  edit(id:string){
    this._http.goEdit(id)
  }

}
