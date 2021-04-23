import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchComponent } from './search-component/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchRoutingModule } from './search-routing.module';

import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
