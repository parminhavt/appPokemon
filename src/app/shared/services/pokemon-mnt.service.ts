import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Response } from '../interfaces/response.interface';

import { IPokemonMnt } from '../model/pokemon-mnt.model';
import { IPokemonAbility } from '../model/pokemon-ability.model';
import { IPokemonEncounters } from '../model/pokemon-encounters.model';

@Injectable()
export class PokemonMntService {

    oldPokemonAbility: Array<number> = [];

    private headers = { headers: { 'X-PO-Screen-Lock': 'true' } };

    private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
    // private imageURL = 'https://pokeres.bastionbot.org/images/pokemon/';

    constructor(private http: HttpClient) { }

    /**
     * Método que trás a lista de pokemons
     *
     * @param page number
     * @param pageSize number
     * @return Uma lista do tipo IPokemomMnt com os pokemons
     */
    searchList(page = 1, pageSize = 20): Observable<Response<IPokemonMnt>> {
        const url = `${this.apiUrl}?limit=${pageSize * page}`;
        return this.http.get<Response<IPokemonMnt>>(url, this.headers);
    }

    /**
     * Método que busca as informações sobre habilidades de um pokemon
     *
     * @param name string
     * @return Um objeto do tipo IPokemonAbility com as habilidades do pokemon
     */
    getByName(name: string): Observable<IPokemonAbility> {
      return this.http.get<IPokemonAbility>(`${this.apiUrl}/${name}`);
    }

    /**
     * Método que busca as informações sobre habilidades de um pokemon
     *
     * @param id number
     * @return Um objeto do tipo IPokemonAbility com as habilidades do pokemon
     */
    getById(id: number): Observable<IPokemonAbility> {
      return this.http.get<IPokemonAbility>(`${this.apiUrl}/${id}`, this.headers);
    }

    /**
     * Método que busca as informações sobre encontros de um pokemon
     *
     * @param id number
     * @return Um objeto do tipo IPokemonEncounters com as informações de encontros do pokemon
     */
    getEncounters(id: number): Observable<Array<IPokemonEncounters>> {
      const url = `${this.apiUrl}/${id}/encounters`;
      return this.http.get<Array<IPokemonEncounters>>(url, this.headers);
    }

}
