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

  createTask(obj){
    return this._http.post('/api/tasks/',obj)
  }

  deleteTask(id:Number){
    return this._http.delete('/api/tasks/'+id)
  }

  updateTask(obj, id){
    return this._http.patch('/api/tasks/'+id, obj)
  }

}
