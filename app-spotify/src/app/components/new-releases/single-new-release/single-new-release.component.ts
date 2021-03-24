import { Component, OnInit, Input } from '@angular/core';

import { NewReleasesItem } from '../../../interfaces/new-releases';

@Component({
  selector: 'app-single-new-release',
  templateUrl: './single-new-release.component.html',
  styleUrls: ['./single-new-release.component.sass']
})
export class SingleNewReleaseComponent implements OnInit {
  @Input() newRelease: NewReleasesItem;

  constructor() { }

  ngOnInit(): void {
  }

}
