import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import {  OnInit } from '@angular/core';
import { PolygonService } from '../../services/polygon.service';
import { data } from '../../models/stock-data.model';

@Component({
  selector: 'app-home',
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit{
  data: data[] = [];
  
    
    constructor(private polygonService: PolygonService) {}
    
    ngOnInit(): void {
     
      this.data = [{
        Symbol: 'AAPL',
        name: 'Apple Inc.',
        Sector: 'Stocks',
        Recommendation: "Buy the Dip"
      }
        ];
    }
    
}






























