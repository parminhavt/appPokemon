import { IPokemonMnt } from './pokemon-mnt.model';

export interface IPokemonAbility {
    id: number;
    abilities: Array<IPokemonMnt>;
    base_experience: number;
    forms: Array<IPokemonMnt>;
    height: number;
    weight: number;
    name: string;
    order: number;
    species: IPokemonMnt;
}

export class PokemonAbility implements IPokemonAbility {

    id: number;
    abilities: Array<IPokemonMnt>;
    // tslint:disable-next-line:variable-name
    base_experience: number;
    forms: Array<IPokemonMnt>;
    height: number;
    weight: number;
    name: string;
    order: number;
    species: IPokemonMnt;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }

    // tslint:disable-next-line:typedef
    static of(json: any = {}) {
        return new PokemonAbility(json);
    }

    // tslint:disable-next-line:typedef
    static empty() {
        return new PokemonAbility();
    }

    // tslint:disable-next-line:typedef
    static fromJson(json: Array<any> = []) {

        const items: Array<IPokemonAbility> = [];

        for (const values of json) {
            items.push(new PokemonAbility(values));
        }

        return items;
    }

}
