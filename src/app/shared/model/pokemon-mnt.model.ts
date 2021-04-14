/**
 * Interface e modelo referentes aos pokemons
 */

export interface IPokemonMnt {
    name: string;
    url: string;
}

export class PokemonMnt implements IPokemonMnt {

    name: string;
    url: string;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }

    static of(json: any = {}): any {
        return new PokemonMnt(json);
    }

    static empty(): any {
        return new PokemonMnt();
    }

    static fromJson(json: Array<any> = []): any {

        const items: Array<IPokemonMnt> = [];

        for (const values of json) {
            items.push(new PokemonMnt(values));
        }

        return items;
    }

}
