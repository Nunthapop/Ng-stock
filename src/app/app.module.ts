import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { SharedModule } from './shared/shared.module';
import { CandleSeriesService, ChartAllModule, DataLabelService, DateTimeService, LegendService, StockChartAllModule, TooltipService } from '@syncfusion/ej2-angular-charts';
import { PrimeNG } from 'primeng/config';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
  ],
  imports: [
   ChartAllModule, StockChartAllModule,AppComponent,TableModule
  ],
  providers: [
      DateTimeService,
      LegendService,
      TooltipService,
      DataLabelService,
      CandleSeriesService
    ],
  bootstrap: []
})
export class AppModule { 
 
}


