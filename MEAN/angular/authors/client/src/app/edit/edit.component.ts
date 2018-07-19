import { Component, OnInit } from '@angular/core'


import { HttpService } from '../http.service'

import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: [
    './edit.component.css'
  ]
})
export class EditComponent implements OnInit {

  author : any

  authorId : any

  errors : any

  constructor(
    private _http : HttpService,
    private _route : ActivatedRoute,
    private _router : Router
  ) {

    this.author = {
      name : ''
    }

      this._route.params
      .subscribe((params : Params) => {
           this.authorId = params['id']
           this._http.getAuthorById(params['id']).subscribe(dt => {
                this.author = dt
                console.log(this.author)
           })
      })
   }


   onSubmit(obj){
    this.errors = {}
    this._http.updateAuthor(this.authorId,obj).subscribe(data => {
      if('errors' in data){
        console.log(data)
          for (let er in data['errors']){
              let what = data['errors']['name']['kind']

              if(what == 'required'){
                  this.errors.required = 'The name field is required'
              }

              if(what == 'minlength'){
                this.errors.minlength = 'The name field must be larger than 2 chars'
              }
          }
      }else{
        console.log('success!',data)
        this._http.goHome()
      }
    })

  }





  ngOnInit() {

  }

  goHome(){

  }

}
