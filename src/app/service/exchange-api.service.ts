import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeApiService {

  constructor(private http :HttpClient) { }


  getExchangeRate(value = 'INR') :Observable<any> {
    return this.http.get('https://v6.exchangerate-api.com/v6/e375066a937b7b2d4e1951f2/latest/'+value) ;
  }
}
