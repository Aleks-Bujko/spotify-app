import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { SearchComponent } from './components/search/search.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { SingleNewReleaseComponent } from './components/new-releases/single-new-release/single-new-release.component';
import { SearchResultComponent } from './components/search/search-result/search-result.component';
import { ArtistComponent } from './components/artists/artist.component';
import { ArtistTopTracksComponent } from './components/artists/artist-top-tracks/artist-top-tracks.component';
import { ArtistAlbumsComponent } from './components/artists/artist-albums/artist-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NewReleasesComponent,
    SingleNewReleaseComponent,
    SearchResultComponent,
    ArtistComponent,
    ArtistTopTracksComponent,
    ArtistAlbumsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
