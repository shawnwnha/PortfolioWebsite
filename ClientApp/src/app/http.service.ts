import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  post(data){
    return this._http.post('/api/posts',data)
  }
  // show(){
  //   return this._http.get('/api/posts');
  // }
}
