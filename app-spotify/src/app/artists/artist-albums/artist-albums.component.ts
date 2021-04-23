import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.sass']
})
export class ArtistAlbumsComponent implements OnInit {

  @Input() album: any;

  constructor() { }

  ngOnInit(): void {
  }

}
