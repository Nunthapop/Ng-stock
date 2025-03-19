import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockNewsService {
  private apiKey = '3295a69adae044ffaea2b1d884054046';
  private apiUrl = `https://newsapi.org/v2/everything?q=stock&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getStockNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}