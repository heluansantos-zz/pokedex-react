import { AxiosPromise } from 'axios';

import api from './api';

export default class Repository {
  getPokemons(offset?: number): Promise<AxiosPromise> {
    return api.get(`pokemon/?&offset=${offset}&limit=35`);
  }

  getPokemonByName(name: string): Promise<AxiosPromise> {
    return api.get(`pokemon/${name}`);
  }

  getPokemonSpecies(name: string): Promise<AxiosPromise> {
    return api.get(`pokemon-species/${name}`);
  }
}
