import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    PoBreadcrumb,
    PoPageAction, PoTableColumn,
    PoI18nService, PoI18nPipe, PoNotificationService, PoPageFilter
} from '@po-ui/ng-components';

import {forkJoin,  Subscription} from 'rxjs';

import { Response } from '../shared/interfaces/response.interface';

import { IPokemonMnt } from '../shared/model/pokemon-mnt.model';
import { PokemonMntService } from '../shared/services/pokemon-mnt.service';
import { BreadcrumbControlService } from 'dts-backoffice-util';
import { IPokemonAbility, PokemonAbility } from './../shared/model/pokemon-ability.model';

@Component({
    selector: 'app-pokemon-mnt',
    templateUrl: './pokemon-mnt.list.component.html',
    styleUrls: ['./pokemon-mnt.list.component.css']
})
export class PokemonMntListComponent implements OnInit, OnDestroy {

    private itemsSubscription$: Subscription;

    filterSettings: PoPageFilter;

    pageActions: Array<PoPageAction>;
    tableActions: Array<PoPageAction>;

    breadcrumb: PoBreadcrumb;

    items: Array<IPokemonAbility> = new Array<IPokemonAbility>();
    filterItems: Array<IPokemonAbility> = new Array<IPokemonAbility>();
    columns: Array<PoTableColumn>;

    arrayImg: Array<string> = ['/assets/img/25.png',
                               '/assets/img/19.png',
                               '/assets/img/1.png',
                               '/assets/img/30.png',
                               '/assets/img/50.png'];

    hasNext = false;
    pageSize = 20;
    currentPage = 0;
    isLoading = true;
    selectedItem = 0;
    onlyFavorites = false;

    literals: any = {};

    constructor(
        private service: PokemonMntService,
        private poI18nPipe: PoI18nPipe,
        private activatedRoute: ActivatedRoute,
        private poI18nService: PoI18nService,
        private poNotification: PoNotificationService,
        private breadcrumbControlService: BreadcrumbControlService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        forkJoin(
            this.poI18nService.getLiterals(),
            this.poI18nService.getLiterals({ context: 'pokemonMnt' })
        ).subscribe(literals => {
            literals.map(item => Object.assign(this.literals, item));
            this.breadcrumbControlService.addBreadcrumb(this.literals['pokemonMnt'], this.activatedRoute);
            this.setupComponents();
            this.search();
            this.poNotification.information(this.literals['morePokemons']);
        });
    }

    /*Método que busca os dados da table*/
    search(loadMore = false): void {

        this.items = [];
        if (loadMore === true) {
            this.currentPage = this.currentPage + 1;
        } else {
            this.currentPage = 1;
        }

        this.isLoading = true;

        // Busca o Pokemon e as habilidades do mesmo, armazenando em um array para mostrar na table
        this.itemsSubscription$ = this.service
            .searchList(this.currentPage, this.pageSize)
            .subscribe((response: Response<IPokemonMnt>) => {
              response.results.forEach((item: IPokemonMnt) => {
                this.service.getByName(item.name)
                .subscribe((values: IPokemonAbility) => {
                  this.items.push(values);
                });
              });
              this.hasNext = true;
              this.isLoading = false;
            });
    }

    /*Método que chama tela de detalhe*/
    private detail(row: any): void {
        if (this.selectedItem !== 0) {
          this.catchInformation(this.selectedItem);
        } else if (row) {
          this.catchInformation(row.id);
        }
    }

    private catchInformation(id: number): void {
      // Armazena no localStorage o registro selecionado
      this.items.forEach((fields: IPokemonAbility) => {
        if (fields.id === id) {
          this.setLocalStorage('pokemon-detail', JSON.stringify(fields));
        }
      });
      this.router.navigate(['/pokemonMnt/detail', id]);
    }

    /*Método para controle de storage*/
    private setLocalStorage(key: string, value: string): void {
      localStorage.removeItem(key);
      localStorage.setItem(key, value);
    }

    private filter(filter: string): void {

      if (filter && filter.trim() !== '') {
        this.filterItems = [];
        this.items.forEach((value: PokemonAbility) => {
          if (value.name.indexOf(filter) === 0) {
            this.filterItems.push(value);
          }
        });
        this.items = [];
        if (this.filterItems.length > 0) {
          this.items = Object.assign(this.filterItems, this.items);
        }
      } else {
        this.search();
      }

    }

    private setFavorite(row: any): void {
      if (this.service.oldPokemonAbility.indexOf(row.id) === -1) {
        this.service.oldPokemonAbility.push(row.id);
        this.pageActions[1].disabled = false;
      }
      this.setLocalStorage('pokemon-favorite', this.service.oldPokemonAbility.toString());
    }

    /*Quando a linha da table é selecionada chama este método*/
    public onSelected(row: any): void {
        this.selectedItem = row.id;
        this.pageActions[0].disabled = false;
    }

    /*Quando a linha da table é desmarcada chama este método*/
    public onUnselected(): void {
      this.selectedItem = 0;
      this.pageActions[0].disabled = true;
    }

    public onChangeFavorite(): void {
      if (this.service.oldPokemonAbility.length > 0 && this.onlyFavorites) {

        this.items = [];
        this.currentPage = 1;
        this.isLoading = true;

        this.service.oldPokemonAbility.forEach((item: number) => {
          this.itemsSubscription$ = this.service
            .getById(item)
            .subscribe((values: IPokemonAbility) => {
                  this.items.push(values);
            });
          this.isLoading = false;
        });

      } else {
        this.poNotification.warning(this.literals['noInformation']);
        this.onlyFavorites = false;
        this.search();
      }
    }

    public emptyFavorites(): void {
      this.service.oldPokemonAbility = [];
      this.pageActions[1].disabled = true;
      this.onlyFavorites = false;
      this.search();
    }

    /*Método que inicia os objetos utilizados durante a execução*/
    private setupComponents(): void {

      // Gerando o caminho da tela
      this.breadcrumb = this.breadcrumbControlService.getBreadcrumb();

      // Objeto que armazena o filtro da tela
      this.filterSettings = {
        action: this.filter.bind(this),
        placeholder: this.literals['searchName']
    };

      // Botões de ações da página principal
      this.pageActions = [
          {
              label: this.literals['viewPokemonMnt'], disabled: true,
              action: () => this.detail(this), icon: 'po-icon-more'
          },
          {
            label: this.literals['emptyFavorites'], disabled: true,
            action: () => this.emptyFavorites(), icon: 'po-icon-close'
        }
      ];

      this.tableActions = [
        { action: this.detail.bind(this), label: this.literals['viewPokemonMnt'], icon: 'po-icon-more' },
        { action: this.setFavorite.bind(this), label: this.literals['favorite'], icon: 'po-icon-like' },

    ];

      // Array de colunas apresentadas na table
      this.columns = [
        { property: 'id', label: this.literals['id'], type: 'number', width: '10%' },
        { property: 'name', label: this.literals['name'], type: 'string', width: '40%' },
        { property: 'weight', label: this.literals['weight'], type: 'number', width: '10%' },
        { property: 'height', label: this.literals['height'], type: 'number', width: '10%' },
        { property: 'order', label: this.literals['order'], type: 'number', width: '20%' },
        { property: 'base_experience', label: this.literals['baseExperience'], type: 'number', width: '10%' }

      ];

      if (this.service.oldPokemonAbility.length > 0) {
        this.pageActions[1].disabled = false;
      } else {
        this.pageActions[1].disabled = true;
      }

    }

    /*Método que elimina a assinatura do serviço*/
    ngOnDestroy(): void {
        this.itemsSubscription$.unsubscribe();
    }
}

