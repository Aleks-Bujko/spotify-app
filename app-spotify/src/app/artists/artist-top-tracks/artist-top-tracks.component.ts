import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-top-tracks',
  templateUrl: './artist-top-tracks.component.html',
  styleUrls: ['./artist-top-tracks.component.sass']
})
export class ArtistTopTracksComponent implements OnInit {

  @Input() topTrack: any;

  constructor() { }

  ngOnInit(): void {
  }

}
