import { IPokemon } from '../../hooks/Pokemon/interface';

export default interface IPokeCard extends IPokemon {
  className?: string;
  router: string;
  history: any;
}
export interface IPokeCardProps {
  backgroundColor?: string;
}
