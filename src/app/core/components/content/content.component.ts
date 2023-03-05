import { Component } from '@angular/core';

import { AnimeListComponent } from '@app/pages';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AnimeListComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {

}
