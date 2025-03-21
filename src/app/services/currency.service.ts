import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

 private apiKey = 'cur_live_oSq19GnQtJjzcLijcE3J5Z4QeQVcswu33gcVAdJj';
   private apiUrl = `https://api.currencyapi.com/v3/latest?apikey=cur_live_oSq19GnQtJjzcLijcE3J5Z4QeQVcswu33gcVAdJj`;


 //https://api.currencyapi.com/v3/latest?apikey=cur_live_oSq19GnQtJjzcLijcE3J5Z4QeQVcswu33gcVAdJj&currencies=USD&base_currency=EUR
   constructor(private http: HttpClient) {}
 
   getCurrency(base : string, target : string): Observable<any> {
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_oSq19GnQtJjzcLijcE3J5Z4QeQVcswu33gcVAdJj&currencies=${target}&base_currency=${base}`;
     return this.http.get<any>(url);
   }
}
