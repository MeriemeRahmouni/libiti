import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private http : HttpClient) { }

  getFavoris() : Observable<any> {
    return this.http.get('https://isbusy.cfapps.io/favories',{ withCredentials: true});  }
}