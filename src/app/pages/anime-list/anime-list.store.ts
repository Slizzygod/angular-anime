import { Injectable } from "@angular/core";

import { Observable, catchError, filter, map, mergeMap, of, tap } from "rxjs";
import { ComponentStore } from "@ngrx/component-store";

import { AnimeListService } from "./anime-list.service";
import { Anime } from '@app/shared/models';
import { AnimeListAction, AnimeListState } from "./anime-list.models";
import { ANIME_LIST_UNKNOWN_TITLE, AnimeListActionType, animeListDefaultState } from "./anime-list.config";

@Injectable()
export class AnimeListStore extends ComponentStore<AnimeListState> {

  constructor(private animeListService: AnimeListService) {
    super(animeListDefaultState);
  }

  readonly animeList$: Observable<Anime[]> = this.select((state) => state.animeList);
  readonly ready$: Observable<boolean> = this.select((state) => state.ready);
  readonly error$: Observable<unknown> = this.select((state) => state.error);

  setAnimeList = this.updater((state: AnimeListState, animeList: Anime[]) => ({
    ...state, animeList: animeList || animeListDefaultState.animeList
  }));

  setReady = this.updater((state: AnimeListState, ready: boolean) => ({
    ...state, ready: ready || animeListDefaultState.ready
  }));

  setError = this.updater((state: AnimeListState, error: unknown) => ({
    ...state, error: error || animeListDefaultState.error
  }));

  getAnimeListResponseMap(response: any): Anime[] {
    const media = response.data.Page.media;

    return media.map((el: any) => ({
      title: el.title.english || ANIME_LIST_UNKNOWN_TITLE,
      image: el.coverImage.large,
      description: el.description
    }))
  }

  getAnimeList = this.effect((data: Observable<AnimeListAction>) => data.pipe(
    filter((action: AnimeListAction) => action.type === AnimeListActionType.GET_ANIME_LIST),
    mergeMap(() => this.animeListService.getAnimeList()),
    map((response: any) => this.getAnimeListResponseMap(response)),
    tap({
      next: (animeList: Anime[]) => {
        this.setError(animeListDefaultState.error);
        this.setAnimeList(animeList);
        this.setReady(true);
      }
    }),
    catchError((error: unknown) => {
      this.setError(error);
      this.setAnimeList(animeListDefaultState.animeList);
      this.setReady(true);

      return of(error);
    })
  ));

}
