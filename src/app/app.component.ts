import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true

})
export class AppComponent {
  // constructor(private primeng: PrimeNG) {}


  title = 'chart';
  items: MenuItem[] = [];
    ngOnInit() {
      // this.primeng.ripple.set(true);
      this.items = [

        {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/'
        },
        {
          label: 'Chart',
          icon: 'pi pi-bitcoin',
          routerLink: '/app-chart'
        },
        {
          label: 'Wallet',
          icon: 'pi pi-wallet',
          routerLink: '/'
        },
        {
          label: 'News',
          icon: 'pi pi-wallet',
          routerLink: '/'
        },

      ]
    }
}
