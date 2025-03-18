import { NgModule } from '@angular/core';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, DataLabelService, DateTimeService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [ // Export so other modules/components can use these
    ChartAllModule,
    StockChartAllModule,
    TableModule
  ],
  providers: [
    DateTimeService,
    LegendService,
    TooltipService,
    DataLabelService,
    CandleSeriesService
  ]
})
export class SharedModule { }
