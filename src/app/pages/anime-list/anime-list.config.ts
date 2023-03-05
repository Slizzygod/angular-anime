export const ANIME_LIST_UNKNOWN_TITLE = 'Unknown';

export enum AnimeListActionType {
  GET_ANIME_LIST = 'getAnimeList'
}

export const animeListDefaultState = {
  animeList: [],
  error: null
}
