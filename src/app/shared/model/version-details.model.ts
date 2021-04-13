import { IPokemonMnt } from './pokemon-mnt.model';
import { IEncountersDetail } from './encounter-details.model';

export interface IVersionDetails {
  encounter_details: Array<IEncountersDetail>;
  max_chance: number;
  version: IPokemonMnt;
}

export class VersionDetails implements IVersionDetails {

  // tslint:disable-next-line:variable-name
  encounter_details: Array<IEncountersDetail>;
  // tslint:disable-next-line:variable-name
  max_chance: number;
  version: IPokemonMnt;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }

    // tslint:disable-next-line:typedef
    static of(json: any = {}) {
        return new VersionDetails(json);
    }

    // tslint:disable-next-line:typedef
    static empty() {
        return new VersionDetails();
    }

    // tslint:disable-next-line:typedef
    static fromJson(json: Array<any> = []) {

        const items: Array<IVersionDetails> = [];

        for (const values of json) {
            items.push(new VersionDetails(values));
        }

        return items;
    }

}
