import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, debounceTime } from 'rxjs/operators';

import { APISearch } from '../interfaces/APISearch';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private authService: AuthService) {}

  public async searchArtistsAndTracks(query: string): Promise<Observable<APISearch[]>> {
    const searchUrl: string = `search?q=${ query }&type=track%2Cartist`;

    return (await this.authService.getQuery(searchUrl)).pipe(
      debounceTime(500),
      map((res: APISearch[]) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          console.log('res:', res);
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
