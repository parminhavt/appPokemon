import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PoModule, PoI18nPipe } from '@po-ui/ng-components';

import { PokemonMntService } from '../shared/services/pokemon-mnt.service';
import { PokemonMntDetailComponent } from './detail/pokemon-mnt.detail.component';
import { PokemonMntListComponent } from './pokemon-mnt.list.component';
import { PokemonMntRoutingModule } from './pokemon-mnt-routing.module';
import { AppPokemonInfoComponent } from './detail/pokemon-info.component/pokemon-info.component.component';

@NgModule({
    imports: [
        CommonModule,
        PoModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PokemonMntRoutingModule
    ],
    declarations: [
        PokemonMntListComponent,
        PokemonMntDetailComponent,
        AppPokemonInfoComponent
    ],
    exports: [
        PokemonMntListComponent
    ],
    providers: [
        PoI18nPipe,
        PokemonMntService
    ],
})
export class PokemonMntModule { }

