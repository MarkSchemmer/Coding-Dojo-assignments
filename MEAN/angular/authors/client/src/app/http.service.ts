import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router, Params } from '../../node_modules/@angular/router'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http : HttpClient,
    private _router : Router,
  ) {

  }

  createAuthor(obj){
    return this._http.post('/api/authors',obj)
  }

  deleteAuthor(id){
    return this._http.delete('/api/authors/'+id)
  }

  updateAuthor(id, obj){
    return this._http.patch('/api/authors/'+id, obj)
  }

  getAuthorById (id){
    return this._http.get('/api/authors/'+id)
  }

  goHome(){
    this._router.navigate(['/'])
  }

  goEdit(id){
    this._router.navigate(['edit/'+id])
  }

  getAllAuthors(){
    return this._http.get('/api/authors')
  }

}
