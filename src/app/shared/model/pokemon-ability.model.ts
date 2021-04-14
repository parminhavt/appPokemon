/**
 * Interface e Modelo referente as habilidades dos pokemons
 */

import { IPokemonMnt } from './pokemon-mnt.model';

export interface IPokemonAbility {
    id: number;
    abilities: Array<IPokemonMnt>;
    base_experience: number;
    height: number;
    weight: number;
    name: string;
    order: number;
    species: IPokemonMnt;
}

export class PokemonAbility implements IPokemonAbility {

    id: number;
    abilities: Array<IPokemonMnt>;
    base_experience: number;
    height: number;
    weight: number;
    name: string;
    order: number;
    species: IPokemonMnt;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }

    static of(json: any = {}): any {
        return new PokemonAbility(json);
    }

    static empty(): any {
        return new PokemonAbility();
    }

    static fromJson(json: Array<any> = []): any {

        const items: Array<IPokemonAbility> = [];

        for (const values of json) {
            items.push(new PokemonAbility(values));
        }

        return items;
    }

}
