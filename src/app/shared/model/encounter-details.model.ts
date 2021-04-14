/**
 * Interface e Modelo referentes as informações de encontros dos Pokemons, usados pelo objeto
 * version_details no modelo de encontros (pokemon-encounters.model.ts)
 */

import { IPokemonMnt } from './pokemon-mnt.model';

export interface IEncountersDetail {
    chance: number;
    max_level: number;
    method: IPokemonMnt;
    min_level: number;
}

export class EncountersDetail implements IEncountersDetail {

    chance: number;
    // tslint:disable-next-line:variable-name
    max_level: number;
    method: IPokemonMnt;
    // tslint:disable-next-line:variable-name
    min_level: number;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }

    static of(json: any = {}): any {
        return new EncountersDetail(json);
    }

    static empty(): any {
        return new EncountersDetail();
    }

    static fromJson(json: Array<any> = []): any {

        const items: Array<IEncountersDetail> = [];

        for (const values of json) {
            items.push(new EncountersDetail(values));
        }

        return items;
    }

}
