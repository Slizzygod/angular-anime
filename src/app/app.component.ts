import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent, ContentComponent } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterModule,

    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'angular-anime';
}
