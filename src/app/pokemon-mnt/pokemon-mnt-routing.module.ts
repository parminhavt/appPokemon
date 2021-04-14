import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonMntDetailComponent } from './detail/pokemon-mnt.detail.component';
import { PokemonMntListComponent } from './pokemon-mnt.list.component';

const routes: Routes = [
    {
      path: '',
      component: PokemonMntListComponent
    },
    {
        path: 'detail/:id',
        component: PokemonMntDetailComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PokemonMntRoutingModule { }
