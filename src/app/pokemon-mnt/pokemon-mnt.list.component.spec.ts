import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PoI18nPipe, PoI18nService, PoModule } from '@po-ui/ng-components';

import { PokemonMntService } from '../shared/services/pokemon-mnt.service';
import { PokemonMntListComponent } from './pokemon-mnt.list.component';

describe('PokemonMntListComponent', () => {

    let component: PokemonMntListComponent;
    let fixture: ComponentFixture<PokemonMntListComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [CommonModule, PoModule, FormsModule, ReactiveFormsModule,
                      HttpClientModule, RouterModule.forRoot([]),],
            declarations: [PokemonMntListComponent],
            providers: [
                PoI18nPipe,
                PoI18nService,
                PokemonMntService
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonMntListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

});
