import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
  }
  
  getTasks(){
    return this._http.get('http://localhost:8080/tasks');
  }

  getTaskbyId(id: any) {
    let url= id;
    return this._http.get('http://localhost:8080/tasks/'+url);
  }
}