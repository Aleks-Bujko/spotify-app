import { Component, OnInit } from '@angular/core';

import { NewReleasesService } from '../services/new-releases.service';

import { NewReleasesItem } from '../../home/interfaces/new-releases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public newReleases: NewReleasesItem[] = []

  constructor(private newReleasesService: NewReleasesService) { }

  ngOnInit(): void {
    this.getNewReleases();
  }

    public getNewReleases() {
      this.newReleasesService.getNewReleases().subscribe((data: any) => {
        this.newReleases = data;
        console.log('New Releases:', data);
      }, (err) => {
        console.log('Error:', err);
        console.error(err.message);
      }, () => {
        console.log('Complete!');
      });
    }  
}
