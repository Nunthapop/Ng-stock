import { Routes } from '@angular/router';
import { ChartComponent } from './component/chart/chart.component';
import { HomeComponent } from './component/home/home.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { StockNewsComponent } from './component/stock-news/stock-news.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/app-home',
        pathMatch: 'full'
    },
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
    },
    {
        path: 'app-contact',
        component: ContactComponent
    }
];
