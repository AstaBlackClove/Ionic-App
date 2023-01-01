import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendingAnimePage } from './trending-anime.page';

const routes: Routes = [
  {
    path: '',
    component: TrendingAnimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrendingAnimePageRoutingModule {}
