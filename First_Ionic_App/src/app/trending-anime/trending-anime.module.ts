import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrendingAnimePageRoutingModule } from './trending-anime-routing.module';

import { TrendingAnimePage } from './trending-anime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrendingAnimePageRoutingModule
  ],
  declarations: [TrendingAnimePage]
})
export class TrendingAnimePageModule {}
