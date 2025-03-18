// src/app/component/chart/chart.component.ts
import { Component, OnInit } from '@angular/core';
import { StockData } from '../../models/stock-data.model';
import { PolygonService } from '../../services/polygon.service';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, CandleSeriesService } from '@syncfusion/ej2-angular-charts';
import { CardModule } from 'primeng/card';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartAllModule, StockChartAllModule, CardModule, SearchComponent],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [DateTimeService, LegendService, TooltipService, DataLabelService, CandleSeriesService],
})
export class ChartComponent implements OnInit {
  public chartData: StockData[] = [];
  title = 'AAPL STOCK';
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public crosshair?: Object;
  theme?: string;

  constructor(private polygonService: PolygonService) {
    this.primaryXAxis = {
      valueType: 'DateTime',
      crosshairTooltip: { enable: true },
    };
    this.primaryYAxis = {
      majorTickLines: { color: 'transparent', width: 0 },
      crosshairTooltip: { enable: true },
    };
    this.crosshair = {
      enable: true,
    };
    this.theme = 'fabric';
  }

  ngOnInit(): void {
    // เรียกใช้ API เพื่อดึงข้อมูลหุ้น
    this.polygonService
      .getStockData('AAPL', 1, 'day') // ตัวอย่าง: ticker='AAPL', range=1, timespan='day'
      .subscribe({
        next: (data) => {
          this.chartData = data; // อัปเดตข้อมูลใน chartData
          this.title = 'AAPL STOCK'; // อัปเดต title
        },
        error: (err) => {
          console.error('Error fetching stock data:', err);
        },
      });
  }
  onSearch(ticker: string) {
    this.polygonService.getStockData(ticker, 1, 'day').subscribe({
      next: (data) => {
        this.chartData = [...data];
        setTimeout(() => {
          this.title = `${ticker} STOCK`;
        });
      },
      error: (err) => {
        console.error('Error fetching stock data:', err);
      },
    });
  }  

}