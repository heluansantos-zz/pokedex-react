import {
  act,
  renderHook,
  RenderHookResult,
} from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import api from '../../config/api';

import AppProvider from '../../hooks';
import { PokemonCreateContext } from '../../hooks/Pokemon';
import IPokemonContext, { IPokemon } from '../../hooks/Pokemon/interface';

const apiMock = new MockAdapter(api);

describe('Pokemon Hooks', () => {
  let hook: RenderHookResult<{}, IPokemonContext>;

  const mockPokemon: IPokemon = {
    name: 'bulbasaur',
    abilities: [],
    base_experience: 64,
    forms: [],
    game_indices: [],
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: '',
    moves: [],
    order: 1,
    species: {},
    sprites: {},
    stats: [],
    types: [],
    weight: 69,
  };

  beforeEach(() => {
    hook = renderHook(() => PokemonCreateContext(), {
      wrapper: AppProvider,
    });
  });

  it('Should initialize hook', () => {
    expect(hook).toBeDefined();
  });

  it('Should be able to get pokemons', async () => {
    const { getPokemons } = hook.result.current;
    const mockPokemonsResults = [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    ];

    apiMock
      .onGet('pokemon/?&offset=0&limit=35')
      .reply(200, {
        results: mockPokemonsResults,
      })
      .onGet('pokemon/bulbasaur')
      .reply(200, mockPokemon);

    getPokemons(0);

    await hook.waitForNextUpdate();

    expect(hook.result.current.pokemons).toEqual([mockPokemon]);
  });

  it('Should be able to set current pokemon', async () => {
    const { setCurrentPokemon } = hook.result.current;

    apiMock.onGet('pokemon-species/bulbasaur').reply(200, {});

    setCurrentPokemon(mockPokemon);

    await hook.waitForNextUpdate();

    expect(hook.result.current.currentPokemon).toEqual(mockPokemon);
  });

  it('Should be able to reset pokemon array', () => {
    const { resetPokemons } = hook.result.current;

    act(() => {
      resetPokemons();
    });

    expect(hook.result.current.pokemons).toEqual([]);
  });

  it('Should be able to search pokemon', async () => {
    const { searchPokemon } = hook.result.current;
    const mockPokemonsResults = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    };
    apiMock.onGet('pokemon/bulbasaur').reply(200, mockPokemonsResults);

    searchPokemon('bulbasaur');

    await hook.waitForNextUpdate();

    expect(hook.result.current.pokemons).toEqual([mockPokemonsResults]);
  });

  it('Should be able formatePokemonId return string with two 0', () => {
    const { formatePokemonId } = hook.result.current;

    const id = formatePokemonId(1);

    expect(id).toEqual('001');
  });

  it('Should be able formatePokemonId return string with one 0', () => {
    const { formatePokemonId } = hook.result.current;

    const id = formatePokemonId(11);

    expect(id).toEqual('011');
  });

  it('Should be able formatePokemonId return default string', () => {
    const { formatePokemonId } = hook.result.current;

    const id = formatePokemonId(111);

    expect(id).toEqual('111');
  });

  it('Should initialize  x at hook Page', () => {
    const { infoPokerdexHistory } = hook.result.current;
    const info1 = infoPokerdexHistory();

    expect(info1).toEqual('Os jogos originais de Pokémon são japoneses');
  });

  it('Should initialize  info001 at hook Page', () => {
    const { infoPokerdexHistory } = hook.result.current;
    const info001 = infoPokerdexHistory();

    expect(info001).toEqual(true);
  });
});
