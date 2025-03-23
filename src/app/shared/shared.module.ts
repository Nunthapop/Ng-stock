import { NgModule } from '@angular/core';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, DataLabelService, DateTimeService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist';
import {ReactiveFormsModule} from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  exports: [ // Export so other modules/components can use these
    ChartAllModule,
    StockChartAllModule,
    TableModule,
    OrderListModule,
     ListboxModule,ReactiveFormsModule,InputTextModule,ButtonModule,
     DataViewModule,FieldsetModule
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
