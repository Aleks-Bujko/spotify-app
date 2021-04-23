import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistService } from './services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistComponent implements OnInit {

  public artistId: string;
  public artist: any;
  public topTracks: any[];
  public albums: any[]; 

  constructor(private activatedRoute: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit(): void {
    this.getCurrentRoute();
    this.getArtist();
    this.getTopTracks();
    this.getAlbums();
  }

    
    public getCurrentRoute(): void {
      this.activatedRoute.params.subscribe((params) => {
        this.artistId = params.id;
        console.log('Current Route Id', params.id);
      });
    }

    public getArtist() {
      this.artistService.getArtists(this.artistId).subscribe((artist: any) => {
        this.artist = artist;
        console.log('Artist:', artist);
      }, (err) => {
        console.log('Error:', err);
        console.error(err.message);
      }, () => {
        console.log('Complete!');
      });
    }
    public getTopTracks() {
      this.artistService.getTopTracks(this.artistId).subscribe((topTracks: any) => {
        this.topTracks = topTracks;
        console.log('Top tracks:', topTracks);
      }, (err) => {
        console.log('Error:', err);
        console.error(err.message);
      }, () => {
        console.log('Complete!');
      });
    } 

    public getAlbums() {
      this.artistService.getAlbums(this.artistId).subscribe((albums: any) => {
        this.albums = albums;
        console.log('Albums:', albums);
      }, (err) => {
        console.log('Error:', err);
        console.error(err.message);
      }, () => {
        console.log('Complete!');
      });
    } 

}
