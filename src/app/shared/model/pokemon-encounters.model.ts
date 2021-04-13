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

    // tslint:disable-next-line:typedef
    static of(json: any = {}) {
        return new PokemonEncounters(json);
    }

    // tslint:disable-next-line:typedef
    static empty() {
        return new PokemonEncounters();
    }

    // tslint:disable-next-line:typedef
    static fromJson(json: Array<any> = []) {

        const items: Array<IPokemonEncounters> = [];

        for (const values of json) {
            items.push(new PokemonEncounters(values));
        }

        return items;
    }

}
