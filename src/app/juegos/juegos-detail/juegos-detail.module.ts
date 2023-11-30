import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosDetailPageRoutingModule } from './juegos-detail-routing.module';

import { JuegosDetailPage } from './juegos-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosDetailPageRoutingModule
  ],
  declarations: [JuegosDetailPage]
})
export class JuegosDetailPageModule {}
