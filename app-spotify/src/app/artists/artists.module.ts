import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';
import { ArtistTopTracksComponent } from './artist-top-tracks/artist-top-tracks.component';
import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistService } from './services/artist.service';


@NgModule({
  declarations: [
    ArtistComponent,
    ArtistTopTracksComponent,
    ArtistAlbumsComponent
],
  imports: [
    CommonModule,
    ArtistRoutingModule,
  ],
  providers: [
    ArtistService
  ]
})
export class ArtistsModule { }
