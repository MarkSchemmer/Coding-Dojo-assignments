import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Router, ActivatedRoute, Params } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http : HttpClient,
    private _router : Router
  ) { }
}
