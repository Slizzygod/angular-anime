import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Anime } from '@app/shared/models';

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimeCardComponent {

  @Input() anime: Anime;

}
