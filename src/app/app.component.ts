import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent, ContentComponent } from './core/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterModule,

    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  standalone: true
})
export class AppComponent {  }
