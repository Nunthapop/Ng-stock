// src/app/models/chart-data.model.ts
// src/app/models/stock-data.model.ts
export interface StockData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}
export interface data {
  Symbol: string;
  price: string;
  volume: number;
  Change: string;
  total: number;
  category: string
}