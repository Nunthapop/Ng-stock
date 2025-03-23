import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // ✅ เพิ่ม ActivatedRoute
import { CandleSeriesService, ChartAllModule, DataLabelService, DateTimeService, LegendService, StockChartAllModule, TooltipService } from '@syncfusion/ej2-angular-charts';
import { CardModule } from 'primeng/card';
import { StockData } from '../../models/stock-data.model';
import { PolygonService } from '../../services/chart/polygon.service';
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
  title = 'Loading...';
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public crosshair?: Object;
  theme?: string;
  symbol: string = ''; // ✅ เก็บค่า symbol จาก URL
  isLoading: boolean = false; // สถานะการโหลดข้อมูล

  constructor(private route: ActivatedRoute, private polygonService: PolygonService) {
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
    // ✅ อ่านค่า symbol จาก URL
    this.route.paramMap.subscribe(params => {
      this.symbol = params.get('symbol') || 'AAPL'; // ถ้าไม่มีค่าให้ default เป็น 'AAPL'
      this.onSearch(this.symbol); // ✅ โหลดข้อมูลหุ้นตาม symbol
    });
  }

  onSearch(ticker: string) {
    this.polygonService.getStockData(ticker, 1, 'day').subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {
          this.chartData = [...data];
          setTimeout(() => {
            this.title = `${ticker} STOCK`;
          });
        } else {
          console.error('Invalid data format:', data);
          this.title = 'Error: Invalid data format';
        }
      },
      error: (err) => {
        if (err.status === 429) {
          // Handle 429 Rate Limit Error
          console.error('Rate limit exceeded. Please try again later.');
          this.title = 'Rate limit exceeded. Please try again later.';
        } else {
          console.error('Error fetching stock data:', err);
          this.title = 'Error fetching data';
        }
      },
    });
  }
}
