import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { SearchComponent } from './components/search/search.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { SingleNewReleaseComponent } from './components/new-releases/single-new-release/single-new-release.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NewReleasesComponent,
    SingleNewReleaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
