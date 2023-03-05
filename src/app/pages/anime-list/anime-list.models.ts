import { Anime } from '@app/shared/models';

export interface AnimeListState {
  animeList: Anime[];
  error: unknown;
}

export interface AnimeListAction {
  type: string;
}
