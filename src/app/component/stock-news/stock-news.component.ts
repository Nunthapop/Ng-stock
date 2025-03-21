import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StockNewsService } from '../../services/stock-news.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-news',
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  templateUrl: './stock-news.component.html',
  styleUrl: './stock-news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockNewsComponent implements OnInit {
  newsList: any[] = [];
  filteredNewsList: any[] = [];
  searchQuery: FormControl = new FormControl('');

  constructor(private stockNewsService: StockNewsService) {}

  ngOnInit() {
    const storedNews = localStorage.getItem('stockNews'); // ลองเช็คว่ามีข้อมูลใน localStorage ไหม
  
    if (storedNews) {
      this.newsList = JSON.parse(storedNews); // ถ้ามีข้อมูลจากการดึงก่อนหน้านี้ ก็ใช้ข้อมูลเก่า
      this.filteredNewsList = this.newsList;
      this.filterNews(); // Call filterNews to initialize filteredNewsList
    } else {
      this.stockNewsService.getStockNews().subscribe((data: any) => {
        this.newsList = data.articles;
        this.filteredNewsList = this.newsList;
        console.log('News List:', this.newsList);
        localStorage.setItem('stockNews', JSON.stringify(data.articles)); // เก็บข่าวใน localStorage
        this.filterNews(); // Call filterNews to initialize filteredNewsList
      }, (error) => {
        console.error('Error fetching news:', error);
      });
    }

    this.searchQuery.valueChanges.subscribe(query => {
      this.filterNews(query);
    });
  }

  filterNews(query: string = '') {
    console.log('Filtering news with query:', query);
    this.filteredNewsList = this.newsList.filter(news =>
      (news.title && news.title.toLowerCase().includes(query.toLowerCase())) ||
      (news.description && news.description.toLowerCase().includes(query.toLowerCase()))
    );
    console.log('Filtered News List:', this.filteredNewsList);
  }
}