import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks(){
     return this._http.get('/api/tasks/')
  }

  getTaskById(id:Number){
    return this._http.get('/api/tasks/'+id)
  }

  createTask(title:String){
    this._http.post('/api/tasks/'+title+'/',{})
    .subscribe(data => console.log(data))
  }

  deleteTask(id:Number){
    this._http.delete('/api/tasks/'+id)
    .subscribe(data => console.log(data))
  }

  updateTask(id:Number, title:String){
    this._http.patch('/api/tasks/'+id,{})
    .subscribe(data => console.log(data))
  }

}
