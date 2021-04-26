import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { NewReleasesService } from '../services/new-releases.service';

import { NewReleasesItem } from '../../home/interfaces/new-releases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @ViewChild('slider', { read: ElementRef }) public slider: ElementRef<any>;

  public newReleases: NewReleasesItem[] = []

  constructor(private newReleasesService: NewReleasesService) {  }

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
    
    public scrollRight(): void {
      this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft + 700), behavior: 'smooth' });
    }
  
    public scrollLeft(): void {
      this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft - 700), behavior: 'smooth' });
    }
  
}