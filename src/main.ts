import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhNYVBpR2Nbek5xdF9GZ1ZVQGYuP1ZhSXxWdkZjXX5ecHNRQGlZV0Q=")
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));




  