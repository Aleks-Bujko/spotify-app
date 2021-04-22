import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {

  @Input() artist:any[] = [];
  @Input() track:any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigate(artist: any): void {
    this.router.navigate(['/artist', artist.id]);
  }

}
