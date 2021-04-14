/**
 * Interface e Modelo referentes as versões dos encontros de Pokemon
 * Este modelo é utilizado pelo pokemon-encounter.model.ts
 */

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

    static of(json: any = {}): any {
        return new VersionDetails(json);
    }

    static empty(): any {
        return new VersionDetails();
    }

    static fromJson(json: Array<any> = []): any {

        const items: Array<IVersionDetails> = [];

        for (const values of json) {
            items.push(new VersionDetails(values));
        }

        return items;
    }

}
