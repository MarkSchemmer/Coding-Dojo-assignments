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
  constructor(private _httpService: HttpService) {
    this.allTasks()
  }

  allTasks(){
    this._httpService.getTasks()
      .subscribe(data => {
        this.obj = data
      })
  }
}
