/**
 * Interface e Modelo referentes a encontrdos dod Pokemons, classe principal
 * que utiliza outras 2 para formalizar o modelo
 */

import { IPokemonMnt } from './pokemon-mnt.model';
import { IVersionDetails } from './version-details.model';

export interface IPokemonEncounters {
    location_area: IPokemonMnt;
    version_details: Array<IVersionDetails>;
}

export class PokemonEncounters implements IPokemonEncounters {

    // tslint:disable-next-line:variable-name
    location_area: IPokemonMnt;
    // tslint:disable-next-line:variable-name
    version_details: Array<IVersionDetails>;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }

    static of(json: any = {}): any {
        return new PokemonEncounters(json);
    }

    static empty(): any {
        return new PokemonEncounters();
    }

    static fromJson(json: Array<any> = []): any {

        const items: Array<IPokemonEncounters> = [];

        for (const values of json) {
            items.push(new PokemonEncounters(values));
        }

        return items;
    }

}
