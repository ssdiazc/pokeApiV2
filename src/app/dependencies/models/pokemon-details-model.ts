import {
  Ability,
  PokemonDetailsTemplate,
} from '../templates/pokemon-details-templates';

export class PokemonDetailsModel {
  private _abilities?: Ability[];

  constructor(data: PokemonDetailsTemplate | undefined) {
    this._abilities = data?.abilities;
  }

  get abilities() {
    return this._abilities;
  }
}
