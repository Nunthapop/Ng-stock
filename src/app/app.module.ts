import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { SharedModule } from './shared/shared.module';
import { CandleSeriesService, ChartAllModule, DataLabelService, DateTimeService, LegendService, StockChartAllModule, TooltipService } from '@syncfusion/ej2-angular-charts';
import { PrimeNG } from 'primeng/config';
import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
   ChartAllModule,ButtonModule,
    StockChartAllModule,AppComponent,
    AsyncPipe,TableModule,OrderListModule,ReactiveFormsModule
    ,CommonModule,DataViewModule,FormsModule
  ],
  providers: [
      DateTimeService,
      LegendService,
      TooltipService,
      DataLabelService,
      CandleSeriesService,
      CommonModule,AsyncPipe
    ],
  bootstrap: []
})
export class AppModule {

}


