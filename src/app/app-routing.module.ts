import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemonMnt',
    pathMatch: 'full'
  },
  {
    path: 'pokemonMnt',
    loadChildren: () => import('./pokemon-mnt/pokemon-mnt.module').then (m => m.PokemonMntModule)
  },
  {
    path: 'about',
    component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
