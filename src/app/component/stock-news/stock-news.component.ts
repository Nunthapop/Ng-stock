import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StockNewsService } from '../../services/stock-news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-news',
  imports: [CommonModule],
  templateUrl: './stock-news.component.html',
  styleUrl: './stock-news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockNewsComponent {
  newsList: any[] = [];

  constructor(private stockNewsService: StockNewsService) {}

  ngOnInit() {
    const storedNews = localStorage.getItem('stockNews'); // ลองเช็คว่ามีข้อมูลใน localStorage ไหม
  
    if (storedNews) {
      this.newsList = JSON.parse(storedNews); // ถ้ามีข้อมูลจากการดึงก่อนหน้านี้ ก็ใช้ข้อมูลเก่า
    } else {
      this.stockNewsService.getStockNews().subscribe((data: any) => {
        this.newsList = data.articles;
        console.log('News List:', this.newsList);
        localStorage.setItem('stockNews', JSON.stringify(data.articles)); // เก็บข่าวใน localStorage
      }, (error) => {
        console.error('Error fetching news:', error);
      });
    }
  }

}
