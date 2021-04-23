import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },

  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule) 
  },

  {
    path: 'search/:term',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },

  {
    path: 'artist/:id',
    loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
