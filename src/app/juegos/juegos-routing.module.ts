import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosPage } from './juegos.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosPage
  },
  {
    path: 'juegos-detail',
    loadChildren: () => import('./juegos-detail/juegos-detail.module').then( m => m.JuegosDetailPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosPageRoutingModule {}
