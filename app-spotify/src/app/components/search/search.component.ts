import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Artist } from '../../interfaces/artist';
import { Album } from '../../interfaces/album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  album: any;
  query: string;

  constructor(private authService: AuthService) { }

  async ngOnInit() {

  (await this.authService.searchMusic(this.query))
      .subscribe(album => {
        console.log(album)
        this.album = album;
      });
  }
}