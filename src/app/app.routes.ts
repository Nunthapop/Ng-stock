import { Routes } from '@angular/router';
import { ChartComponent } from './component/chart/chart.component';
import { HomeComponent } from './component/home/home.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { StockNewsComponent } from './component/stock-news/stock-news.component';

export const routes: Routes = [

    {
        path: 'app-chart',
        component: ChartComponent
    }
    ,
    {
        path: 'app-home',
        component: HomeComponent
    },
    {
        path: 'app-stock-news',
        component: StockNewsComponent
    }
    ,
    {
        path: 'app-wallet',
        component: WalletComponent
    }
];
