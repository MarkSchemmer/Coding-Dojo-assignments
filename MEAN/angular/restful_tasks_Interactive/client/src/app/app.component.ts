import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN';
  obj : any;
  info: any;
  constructor(private _httpService: HttpService) {
  }

  allTasks(){
    this._httpService.getTasks()
      .subscribe(data => {
        console.log(data)
        this.obj = data
      })
  }

  show(id){
    this._httpService.getTaskById(id)
      .subscribe(data => {
        this.info = data 
      })
  }
}
