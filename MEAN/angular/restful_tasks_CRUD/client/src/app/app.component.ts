import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj : any;
  NewTaskObj : any;
  updateTask : any;
  info: any;
  EditWhich:any;
  constructor(private _httpService: HttpService) {
    this.obj = []
    this.allTasks()
    this.NewTaskObj = {
      title:"",
      desc:""
    }
    this.updateTask = {
      title:"",
      desc:""
    }
  }


  EditMe(id){
    this.EditWhich = id
    this.allTasks()
  }


  doneEditing(id){
    this._httpService.updateTask(this.updateTask, id).subscribe(data =>{
      if('errors' in data){
        console.log('erros in the update')
      } else {
        this.allTasks()
        this.resetNewTask()
        this.EditWhich = 0
      }
    })
  }

  deleteTask(id){
    this._httpService.deleteTask(id)
      .subscribe(data => {
        if('errors' in data){
          console.log('erros!!!!! on delete')
        } else {
          this.allTasks()
        }
      })
  }

  resetNewTask(){
    this.NewTaskObj = {
      title : "",
      desc : ""
    }
    this.updateTask = {
      title : "",
      desc : ""
    }
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

  createNewTask(){
    this._httpService.createTask(this.NewTaskObj).subscribe(data => {
      if('errors' in data){
          console.log('errors')
      } else{
        this.allTasks()
        this.resetNewTask()
      }

    })

  }
}
