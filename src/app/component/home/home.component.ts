import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PolygonService } from '../../services/polygon.service';
import { data } from '../../models/stock-data.model';
import { OrderListModule } from 'primeng/orderlist';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  imports: [SharedModule, OrderListModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  data: data[] = [];
  whitelist: data[] = [];
  recommendForm!: FormGroup;
  filteredData$!: Observable<data[]>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Create the form first
    this.recommendForm = this.fb.group({
      text: ['']
    });

    // Initialize your data
    this.data = [
      { Symbol: 'AAPL', price: '$192.53', volume: 48752630, Change: '+1.27%', total: 3022451890, category: 'Technology' },
      { Symbol: 'MSFT', price: '$403.78', volume: 25631470, Change: '+0.89%', total: 2998710452, category: 'Technology' },
      { Symbol: 'AMZN', price: '$178.75', volume: 30215689, Change: '-0.34%', total: 1845723615, category: 'Consumer Cyclical' },
      { Symbol: 'GOOGL', price: '$156.37', volume: 18963254, Change: '+2.15%', total: 1963514782, category: 'Communication Services' },
      { Symbol: 'TSLA', price: '$237.49', volume: 87456123, Change: '+3.62%', total: 7569451236, category: 'Consumer Cyclical' },
      { Symbol: 'NVDA', price: '$950.02', volume: 45789632, Change: '+1.87%', total: 9782145693, category: 'Technology' },
      { Symbol: 'META', price: '$474.99', volume: 32145698, Change: '+0.75%', total: 1236547895, category: 'Communication Services' },
      { Symbol: 'JPM', price: '$196.56', volume: 12365478, Change: '-0.48%', total: 987456321, category: 'Financial Services' },
      { Symbol: 'JNJ', price: '$152.28', volume: 8745632, Change: '-1.25%', total: 789562314, category: 'Healthcare' },
      { Symbol: 'WMT', price: '$68.45', volume: 15236987, Change: '+0.95%', total: 1547896325, category: 'Consumer Defensive' }
    ];

    // Now set up the filteredData$ observable after the form is initialized
    this.filteredData$ = this.recommendForm.get('text')!.valueChanges.pipe(
      startWith(''),
      map(text => this.filterData(text))
    );
  }

  filterData(text: string): data[] {
    if (!text) return this.data;
    return this.data.filter(item => 
      item.Symbol.toLowerCase().includes(text.toLowerCase())
    );
  }

  onSubmit(): void {
    // Handle form submission
  }

  isInWhitelist(stock: any): boolean {
    return this.whitelist.some(item => item.Symbol === stock.Symbol);
  }

  addToWhitelist(stock: any): void {
    if (!this.isInWhitelist(stock)) {
      this.whitelist.push(stock);
    }
  }

  removeFromWhitelist(stock: any): void {
    this.whitelist = this.whitelist.filter(item => item.Symbol !== stock.Symbol);
  }
}