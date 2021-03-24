import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { FormattedNewReleases, APINewReleases } from '../interfaces/new-releases';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesService {
  private newReleasesUrl: string = 'browse/new-releases';

  constructor(private authService: AuthService) { }

  public async getNewReleases(): Promise<Observable<FormattedNewReleases[]>> {
    return (await this.authService.getQuery(this.newReleasesUrl)).pipe(
      map((res: APINewReleases) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          const formattedItems: FormattedNewReleases[] = res.albums.items.map((
            { id, images, name, artists, type }) => (
            { id, images, name, artists, type }
            ));
          return formattedItems;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
