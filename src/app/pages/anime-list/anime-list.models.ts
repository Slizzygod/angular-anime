import { Anime } from '@app/shared/models';

export interface AnimeListState {
  animeList: Anime[];
  ready: boolean;
  error: unknown;
}

export interface AnimeListAction {
  type: string;
}
