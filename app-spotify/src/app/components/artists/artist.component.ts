import { Component, OnInit } from '@angular/core';

import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistComponent implements OnInit {

  public artistId: string = "0X380XXQSNBYuleKzav5UO";
  public artist: any;
  public topTracks: any[];
  public albums: any[]; 

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.getArtist();
    this.getTopTracks();
    this.getAlbums();
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
