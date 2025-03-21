import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MenubarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  title = 'chart';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/app-home',
      },
      {
        label: 'Chart',
        icon: 'pi pi-bitcoin',
        routerLink: '/app-chart',
      },
      {
        label: 'Exchange',
        icon: 'pi pi-wallet',
        routerLink: '/app-wallet',
      },
      {
        label: 'News',
        icon: 'pi pi-book',
        routerLink: '/app-stock-news',
      },
    ];
  }
  
  
}