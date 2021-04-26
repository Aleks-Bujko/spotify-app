import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NewReleasesItem } from '../interfaces/new-releases';

@Component({
  selector: 'app-single-new-release',
  templateUrl: './single-new-release.component.html',
  styleUrls: ['./single-new-release.component.sass']
})
export class SingleNewReleaseComponent implements OnInit {
  @Input() newRelease: NewReleasesItem;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigate(artist: any): void {
    console.log('id', artist.id);
    this.router.navigate(['/artist', artist.id]);
  }

}