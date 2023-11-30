import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosDetailPage } from './juegos-detail.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosDetailPageRoutingModule {}
