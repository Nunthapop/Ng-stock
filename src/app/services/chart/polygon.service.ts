// src/app/services/polygon.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StockData } from '../../models/stock-data.model';


@Injectable({
  providedIn: 'root',
})
export class PolygonService {
  private apiKey = '27FzoI96pk1L3ixS815mBPP7glOArbJh'; // 🔑 ใส่ API Key ของคุณ
  private baseUrl = 'https://api.polygon.io/v2/aggs/ticker';
  

  constructor(private http: HttpClient) {}

  getStockData(ticker: string, range: number, timespan: string): Observable<StockData[]> {
    const endDate = new Date().toISOString().split('T')[0]; // วันที่ปัจจุบัน (YYYY-MM-DD)
    const url = `${this.baseUrl}/${ticker}/range/${range}/${timespan}/2003-01-03/${endDate}?adjusted=true&sort=asc&apiKey=${this.apiKey}`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        // แปลงข้อมูลจาก API ให้ตรงกับรูปแบบที่ต้องการ
        return response.results.map((result: any) => ({
          date: new Date(result.t),
          open: result.o,
          high: result.h,
          low: result.l,
          close: result.c,
          volume: result.v,
        }));
      })
    );
  }
}