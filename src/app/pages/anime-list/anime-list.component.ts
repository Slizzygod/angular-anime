import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subject } from 'rxjs';

import { AnimeCardComponent } from '@app/features';

import { AnimeListStore } from './anime-list.store';
import { AnimeListActionType } from './anime-list.config';
import { AnimeListAction } from './anime-list.models';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
  imports: [
    CommonModule,
    AnimeCardComponent
  ],
  providers: [AnimeListStore]
})
export class AnimeListComponent implements OnInit {

  private actionSubject = new Subject<AnimeListAction>();

  animeList$ = this.animeListStore.animeList$;

  constructor(
    private animeListStore: AnimeListStore
  ) {
    this.animeListStore.getAnimeList(this.actionSubject);
  }

  ngOnInit(): void {
    this.actionSubject.next({ type: AnimeListActionType.GET_ANIME_LIST });
  }

}
