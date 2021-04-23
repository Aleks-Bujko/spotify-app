import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home-component/home.component';
import { SingleNewReleaseComponent } from './single-new-release/single-new-release.component';
import { HomeRoutingModule } from './home-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { NewReleasesService } from './services/new-releases.service';

@NgModule({
  declarations: [
    HomeComponent,
    SingleNewReleaseComponent
  ],
  imports: [
  CommonModule,
  HomeRoutingModule,
  HttpClientModule
],
  providers: [NewReleasesService]
})
export class HomeModule { }
