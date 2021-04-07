import { Injectable, OnInit, Query } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { FormattedNewReleases, APINewReleases } from '../interfaces/new-releases';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesService implements OnInit {
  private newReleasesUrl: string = 'browse/new-releases';

  constructor(private authService: AuthService) { }
  ngOnInit(): void {

  }

  public getNewReleases(): Observable<FormattedNewReleases[]> {
    return this.authService.getQuery(this.newReleasesUrl).pipe(
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
