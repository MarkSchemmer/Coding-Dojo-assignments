import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '../../node_modules/@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appComp : any
  constructor(
    private  _route : ActivatedRoute,
    private _router : Router
  ){

  }

  ngOnInit(){
    this._route.params.subscribe((params:Params) => console.log(params['id']))
  }

  goHome(){
    this._router.navigate(['/'])
  }

}
