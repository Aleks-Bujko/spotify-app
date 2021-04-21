import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { APIArtist } from '../interfaces/APIArtists';
import { APITracks } from '../interfaces/APITracks';
import { APIAlbums, AlbumItem } from '../interfaces/APIAlbums';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private authService: AuthService) { }

  public getArtists(artistId: string): Observable<APIArtist> {
    const artistUrl: string = `artists/${artistId}`;

    // fetch artist info

    return this.authService.getQuery(artistUrl).pipe(
      map((result: APIArtist) => {
        if (!result) {
          throw new Error('Value expected!');
        } else {
          return result;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }

  // fetch top tracks from an artist

  public getTopTracks(artistId: string): Observable<APITracks> {
    const topTracksUrl: string = `artists/${artistId}/top-tracks?country=de`;

  return this.authService.getQuery(topTracksUrl).pipe(
    map((result: APITracks) => {
      if (!result) {
        throw new Error('Value expected!');
      } else {
        return result['tracks'];
      }
    }),
    catchError((err) => {
      throw new Error(err.message);
    }));
  }

  // fetch all albums from an artist

  public getAlbums(artistId: string): Observable<AlbumItem[]> {
    const albumUrl: string = `artists/${artistId}/albums?market=DE`;

  return this.authService.getQuery(albumUrl).pipe(
    map((result: APIAlbums) => {
      if (!result) {
        throw new Error('Value expected!');
      } else {
        return result.items;
      }
    }),
    catchError((err) => {
      throw new Error(err.message);
    }));
  }

}
