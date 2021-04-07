import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

import { APISearch } from '../../interfaces/APISearch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Input() public displaySearch: boolean = false;


  public artistsList: any[] = [];
  public tracksList: any[] = [];

  constructor(private searchService: SearchService) { }

ngOnInit() {
}

public search(query: string) {
  console.log('Term to find:', query);

  this.searchService.searchArtistsAndTracks(query).subscribe((data: any) => {
    this.artistsList = data.artists.items;
    this.tracksList = data.tracks.items;

    console.log('Data:', data);

    if (this.artistsList.length === 0 && this.tracksList.length === 0) {
      this.displaySearch = true;
    }

  }, (err) => {
    console.log('Error:', err);
    console.error(err.message);
  }, () => {
    console.log('Complete!');
  });
}

}