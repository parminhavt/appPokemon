import { Component, Input, OnInit } from '@angular/core';
import { PoI18nService, PoTableColumn } from '@po-ui/ng-components';
import { forkJoin } from 'rxjs';
import { PokemonAbility } from '../../../shared/model/pokemon-ability.model';

@Component({
  selector: 'app-pokemon-info-component',
  templateUrl: './pokemon-info.component.component.html',
  styleUrls: ['./pokemon-info.component.component.css']
})
export class AppPokemonInfoComponent implements OnInit {

  @Input() pokemonEncounters;
  @Input() pokemonAbility = new PokemonAbility();

  tableColumns: Array<PoTableColumn>;

  literals: any = {};

  constructor(private poI18nService: PoI18nService) { }

  ngOnInit(): void {
      forkJoin(
        this.poI18nService.getLiterals(),
        this.poI18nService.getLiterals({ context: 'pokemonMnt' })
    ).subscribe(literals => {
        literals.map(item => Object.assign(this.literals, item));
    });
  }

}
