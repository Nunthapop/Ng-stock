import { Routes } from '@angular/router';
import { ChartComponent } from './component/chart/chart.component';
import { HomeComponent } from './component/home/home.component';
import { NewsComponent } from './component/news/news.component';
import { WalletComponent } from './component/wallet/wallet.component';

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
        path: 'app-news',
        component: NewsComponent
    }
    ,
    {
        path: 'app-wallet',
        component: WalletComponent
    }
];
