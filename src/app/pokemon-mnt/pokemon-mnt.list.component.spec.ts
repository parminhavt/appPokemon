import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMntListComponent } from './pokemon-mnt.list.component';

describe('PokemonMntListComponent', () => {

    let component: PokemonMntListComponent;
    let fixture: ComponentFixture<PokemonMntListComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [PokemonMntListComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonMntListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
