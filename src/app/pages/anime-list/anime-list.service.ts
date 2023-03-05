import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class AnimeListService {

  constructor(private apollo: Apollo) {}

  getAnimeList(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query($page: Int, $perPage: Int) {
          Page(page: $page, perPage: $perPage) {
            media {
              coverImage {
                large
              }
              title {
                english
              }
              description
            }
          }
        }
      `
    });
  }

}
