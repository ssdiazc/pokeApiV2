import data from './data.json'
import {PokemonGeneralConsultModel} from './pokemon-general-consult-model';

// const mappedPokemonData:PokemonGeneralConsult = data;
const mappedPokemonData:PokemonGeneralConsultModel = new PokemonGeneralConsultModel(data);

const findPok =mappedPokemonData.getPokemonInfoByName('venusau');

let validation = !!findPok ? {label:'encontrado', findPok} : 'pokemon no encontrado';

console.log(validation);