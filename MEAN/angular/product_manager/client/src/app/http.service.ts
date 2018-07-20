import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor( private _http : HttpClient,
               private _router : Router
  )
  {

  }

  createProduct(obj){
    return this._http.post('/api/products', obj)
  }

  allProducts(){
    return this._http.get('/api/products')
  }

  getProductById(id){
    return this._http.get('/api/products/'+id)
  }

  updateProduct(obj){
    return this._http.patch('/api/products/'+obj._id, obj )
  }

  deleteProductById(id){
    return this._http.delete('/api/products/'+id)
  }

  goHome(){
      this._router.navigate(['home'])
  }

  goList(){
    this._router.navigate(['list'])
  }

  goEdit(id){
    this._router.navigate(['edit/',id])
  }

}
