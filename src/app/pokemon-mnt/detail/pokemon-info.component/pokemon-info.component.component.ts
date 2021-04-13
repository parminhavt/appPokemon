import { Component, Input, OnInit } from '@angular/core';
import { PoI18nService, PoTableColumn } from '@po-ui/ng-components';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-info-component',
  templateUrl: './pokemon-info.component.component.html',
  styleUrls: ['./pokemon-info.component.component.css']
})
export class AppPokemonInfoComponent implements OnInit {

  @Input() pokemonEncounters;
  @Input() pokemonAbility;

  tableColumns: Array<PoTableColumn>;

  literals: any = {};

  constructor(private poI18nService: PoI18nService) { }

  ngOnInit(): void {
      forkJoin(
        this.poI18nService.getLiterals(),
        this.poI18nService.getLiterals({ context: 'pokemonMnt' })
    ).subscribe(literals => {
        literals.map(item => Object.assign(this.literals, item));
        this.setupComponent();

    });
  }

  private setupComponent(): void {

    this.tableColumns = [
      { property: 'chance', label: this.literals['chanceMaxPercentual'], type: 'number', width: '20%' },
      { property: 'method.name', label: this.literals['method'], type: 'string', width: '40%' },
      { property: 'min_level', label: this.literals['minLevel'], type: 'number', width: '20%' },
      { property: 'max_level', label: this.literals['maxLevel'], type: 'number', width: '20%' }
    ];

  }

}
