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

    public get $name(): string {
        return this.name;
    }

    public get $url(): string {
      return this.url;
  }

    // tslint:disable-next-line:adjacent-overload-signatures
    public set $name(name: string) {
      this.name = name;
  }

    // tslint:disable-next-line:adjacent-overload-signatures
    public set $url(url: string) {
        this.url = url;
    }

    // tslint:disable-next-line:typedef
    static of(json: any = {}) {
        return new PokemonMnt(json);
    }

    // tslint:disable-next-line:typedef
    static empty() {
        return new PokemonMnt();
    }

    // tslint:disable-next-line:typedef
    static fromJson(json: Array<any> = []) {

        const items: Array<IPokemonMnt> = [];

        for (const values of json) {
            items.push(new PokemonMnt(values));
        }

        return items;
    }

}
