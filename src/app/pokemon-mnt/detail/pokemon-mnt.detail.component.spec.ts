import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PoI18nPipe, PoI18nService } from '@po-ui/ng-components';
import { PokemonMntDetailComponent } from './pokemon-mnt.detail.component';

describe('PokemonMntDetailComponent', () => {

    let component: PokemonMntDetailComponent;
    let fixture: ComponentFixture<PokemonMntDetailComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [PokemonMntDetailComponent],
            providers: [PoI18nPipe, PoI18nService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonMntDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

});
