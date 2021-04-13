import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';

import {
    PoBreadcrumb, PoModalAction,
    PoPageAction, PoI18nService, PoI18nPipe, PoNotificationService
} from '@po-ui/ng-components';

import { BreadcrumbControlService } from 'dts-backoffice-util';
import { PokemonMntService } from '../../shared/services/pokemon-mnt.service';
import { IPokemonAbility, PokemonAbility } from 'src/app/shared/model/pokemon-ability.model';
import { IPokemonEncounters } from 'src/app/shared/model/pokemon-encounters.model';

@Component({
    selector: 'app-detail',
    templateUrl: './pokemon-mnt.detail.component.html',
    styleUrls: ['./pokemon-mnt.detail.component.css']
})
export class PokemonMntDetailComponent implements OnInit, OnDestroy {

    private itemsSubscription$: Subscription;

    breadcrumb: PoBreadcrumb;
    modalActions: Array<PoModalAction>;
    detailActions: Array<PoPageAction>;

    pokemonEncounters: Array<IPokemonEncounters> = new Array<IPokemonEncounters>();
    pokemonAbility: IPokemonAbility = new PokemonAbility();

    literals: any = {};

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private poI18nPipe: PoI18nPipe,
        private poI18nService: PoI18nService,
        private poNotification: PoNotificationService,
        private service: PokemonMntService,
        private breadcrumbControlService: BreadcrumbControlService
    ) { }

    ngOnInit(): void {
        forkJoin(
            this.poI18nService.getLiterals(),
            this.poI18nService.getLiterals({ context: 'pokemonMnt' })
        ).subscribe(literals => {
            literals.map(item => Object.assign(this.literals, item));
            this.breadcrumbControlService.addBreadcrumb(this.literals['detailPokemonMnt'], this.activatedRoute);
            this.setupComponents();
            this.get();
        });

    }

    private back(): void {
        this.router.navigate(['./pokemonMnt']);
    }

    private get(): void {
        const id =  parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
        if (id) {
            this.itemsSubscription$ = this.service.getEncounters(id)
            .subscribe((response: Array<IPokemonEncounters>) => {
              if (response) {
                this.pokemonEncounters = [...this.pokemonEncounters, ...response];
                this.itemsSubscription$ = this.service.getById(id)
                .subscribe((item: IPokemonAbility) => {
                  if (item) {
                    this.pokemonAbility = item;
                  } else {
                    this.pokemonAbility.name = 'Pokemon ' + id.toString();
                  }
                });
              }

            });
        }
    }

    private update(): void {
      if (this.service.oldPokemonAbility.indexOf(this.pokemonAbility.id) === -1) {
        this.service.oldPokemonAbility.push(this.pokemonAbility.id);
      }
      this.setLocalStorage('pokemon-favorite', this.service.oldPokemonAbility.toString());

    }

    /*Método para controle de storage*/
    private setLocalStorage(key: string, value: string): void {
      localStorage.removeItem(key);
      localStorage.setItem(key, value);
    }

    private setupComponents(): void {

        this.breadcrumb = this.breadcrumbControlService.getBreadcrumb();

        this.detailActions = [
            { label: this.literals['favorite'], icon: 'po-icon-like', action: this.update.bind(this, this.pokemonAbility)},
            { label: this.literals['back'], action: this.back.bind(this) }
        ];

    }

    ngOnDestroy(): void {
      this.itemsSubscription$.unsubscribe();
    }
}
