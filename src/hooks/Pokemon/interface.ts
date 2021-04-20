import BugBadge from '../../assets/img/Badge/Bug.png';
import DarkBadge from '../../assets/img/Badge/Dark.png';
import DragonBadge from '../../assets/img/Badge/Dragon.png';
import ElectricBadge from '../../assets/img/Badge/Electric.png';
import FairyBadge from '../../assets/img/Badge/Fairy.png';
import FightingBadge from '../../assets/img/Badge/Fighting.png';
import FireBadge from '../../assets/img/Badge/Fire.png';
import FlyingBadge from '../../assets/img/Badge/Flying.png';
import GhostBadge from '../../assets/img/Badge/Ghost.png';
import GrassBadge from '../../assets/img/Badge/Grass.png';
import GroundBadge from '../../assets/img/Badge/Ground.png';
import IceBadge from '../../assets/img/Badge/Ice.png';
import NormalBadge from '../../assets/img/Badge/Normal.png';
import PoisonBadge from '../../assets/img/Badge/Poison.png';
import PsychicBadge from '../../assets/img/Badge/Psychic.png';
import RockBadge from '../../assets/img/Badge/Rock.png';
import SteelBadge from '../../assets/img/Badge/Steel.png';
import WaterBadge from '../../assets/img/Badge/Water.png';

export default interface IPokemonContext {
  pokemons: IPokemon[];
  PokeTypes: IObjectKeys;
  currentPokemon: IPokemon;
  getPokemons: (offset: number) => void;
  formatePokemonId: (id: number) => string;
  resetPokemons: () => void;
  searchPokemon: (name: string) => void;
  setCurrentPokemon: (pokemon: IPokemon) => void;
}

export interface IObjectKeys {
  [key: string]: IPokeType;
}

export interface IPokeType {
  dafaultColor: string;
  badgeIcon: string;
}

export interface IPokemon {
  id: number;
  name: string;
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  is_default: true;
  location_area_encounters: string;
  moves: any[];
  order: number;
  species: any;
  sprites: any;
  stats: any[];
  types: any[];
  weight: number;
}

export const PokeTypes: IObjectKeys = {
  bug: {
    dafaultColor: '#8BD674',
    badgeIcon: BugBadge,
  },
  dark: {
    dafaultColor: '#6F6E78',
    badgeIcon: DarkBadge,
  },
  dragon: {
    dafaultColor: '#7383B9',
    badgeIcon: DragonBadge,
  },
  electric: {
    dafaultColor: '#F2CB55',
    badgeIcon: ElectricBadge,
  },
  fairy: {
    dafaultColor: '#EBA8C3',
    badgeIcon: FairyBadge,
  },
  fighting: {
    dafaultColor: '#EB4971',
    badgeIcon: FightingBadge,
  },
  fire: {
    dafaultColor: '#FFA756',
    badgeIcon: FireBadge,
  },
  flying: {
    dafaultColor: '#83A2E3',
    badgeIcon: FlyingBadge,
  },
  ghost: {
    dafaultColor: '#8571BE',
    badgeIcon: GhostBadge,
  },
  grass: {
    dafaultColor: '#8BBE8A',
    badgeIcon: GrassBadge,
  },
  ground: {
    dafaultColor: '#F78551',
    badgeIcon: GroundBadge,
  },
  ice: {
    dafaultColor: '#91D8DF',
    badgeIcon: IceBadge,
  },
  normal: {
    dafaultColor: '#B5B9C4',
    badgeIcon: NormalBadge,
  },
  poison: {
    dafaultColor: '#9F6E97',
    badgeIcon: PoisonBadge,
  },
  psychic: {
    dafaultColor: '#FF6568',
    badgeIcon: PsychicBadge,
  },
  rock: {
    dafaultColor: '#D4C294',
    badgeIcon: RockBadge,
  },
  steel: {
    dafaultColor: '#4C91B2',
    badgeIcon: SteelBadge,
  },
  water: {
    dafaultColor: '#58ABF6',
    badgeIcon: WaterBadge,
  },
};
