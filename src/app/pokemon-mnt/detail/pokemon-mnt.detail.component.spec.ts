import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMntDetailComponent } from './pokemon-mnt.detail.component';

describe('PokemonMntDetailComponent', () => {

    let component: PokemonMntDetailComponent;
    let fixture: ComponentFixture<PokemonMntDetailComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [PokemonMntDetailComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonMntDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
