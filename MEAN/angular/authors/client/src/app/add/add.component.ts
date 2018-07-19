import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  CreateAuthor : FormGroup

  minLength : any

  errors : any

  constructor(
    private _http : HttpService,
    private fb : FormBuilder
  ) {

    this.CreateAuthor = this.fb.group({
        name : ''
    })

    this.CreateAuthor.valueChanges.subscribe(console.log)

  }

  onSubmit(obj){
    this.errors = {}
    this._http.createAuthor(obj).subscribe(data => {
      if('errors' in data){
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
        this.minLength = false
        this.resetAuthor()
        this._http.goHome()
      }
    })

  }

  resetAuthor(){
    this.CreateAuthor = this.fb.group({
      name : ''
    })
  }

  ngOnInit() {
  }

}
