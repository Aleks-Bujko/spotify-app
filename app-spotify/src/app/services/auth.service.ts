import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Token } from '../interfaces/token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  clientId = environment.clientId;
  clientSecret = environment.clientSecret;
  scope = environment.scope;
  redirectUri = environment.redirectUri;
  token: any = this.getToken();

  constructor(private http: HttpClient) {
  }

/**
   * Authorize through spotify
   */
  authorize(): void {
  // Generate random string
  const state = this.generateRandomString(16);

  // Set spotify auth state
  // This provides protection against attacks such as cross-site request forgery
  localStorage.setItem('spotify:auth:state', state);
} 

  /**
   * Returns set auth state.
   */
  getAuthState(): string {
    return localStorage.getItem('spotify:auth:state');
  }

  /**
   * Returns spotify access token. */

  getToken() {
    const state = this.getAuthState(); 
    const url = 'https://accounts.spotify.com/api/token';

    // Check auth state
    if (state !== this.getAuthState()) {
      return throwError('Wrong state.');
    }

    // Remove auth state
    localStorage.removeItem('spotify:auth:state');

    // application/x-www-form-urlencoded
    const body = new HttpParams()
      .append('grant_type', 'client_credentials')
      .append('client_id', this.clientId)
      .append('client_secret', this.clientSecret);

    const headers = new HttpHeaders({
      // Creates a Base64-encoded ASCII string
      'Authorization':
        'Basic ' + window.btoa(this.clientId + ':' + this.clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    return this.http
      .post(url, body)
      .toPromise()
      .then((token) => {
        this.token = `Bearer ${ token['access_token'] }`;
        localStorage.setItem('token', this.token)
      }, (err: any) => {
        console.log(err);
      });

  }

  getTokenByRefresh(refreshToken: string) {
    const url = 'https://accounts.spotify.com/api/token';

    const body = 'grant_type=refresh_token' + '&refresh_token=' + refreshToken;

    const headers = new HttpHeaders({
      // Creates a Base64-encoded ASCII string
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization':
        'Basic ' + window.btoa(this.clientId + ':' + this.clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http
      .post(url, body, { headers })
      .pipe(catchError(this.handleError));
  }

  getQuery(query:string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const token = localStorage.getItem('token');
    
    const headers = new HttpHeaders({
      // Creates a Base64-encoded ASCII string
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': `${token}`,
    });

    return this.http
      .get(url, { headers })
      .pipe(catchError(this.handleError))

  }

    /**
   *  Generates a random string containing numbers and letters
   * @param length String length
   */
  generateRandomString(length: number) {
      let text = '';
      const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

  /**
   * Handles http errors
   * @param error HttpError
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

}
