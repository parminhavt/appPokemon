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

    // tslint:disable-next-line:typedef
    static of(json: any = {}) {
        return new EncountersDetail(json);
    }

    // tslint:disable-next-line:typedef
    static empty() {
        return new EncountersDetail();
    }

    // tslint:disable-next-line:typedef
    static fromJson(json: Array<any> = []) {

        const items: Array<IEncountersDetail> = [];

        for (const values of json) {
            items.push(new EncountersDetail(values));
        }

        return items;
    }

}
