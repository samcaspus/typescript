import pokemonDispatchTypes, { pokemonType, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "../actions/PokemonActionTypes";

interface defaultStateInterface{

    loading: boolean,
    pokemon?: pokemonType,
    error?: boolean
}

const defaultState: defaultStateInterface = {
    loading: false,
    error: false
}

const pokemonReducer = (state: defaultStateInterface = defaultState, action: pokemonDispatchTypes): defaultStateInterface =>{
    switch(action.type){
        case POKEMON_SUCCESS:
            return {
                
                loading: false,
                pokemon: action.payload
            }
        case POKEMON_FAIL:
            return {
                loading: false,
                error: true,
            }
        case POKEMON_LOADING:
            return {
                loading: true
            }
        default:
            return state
    }
}


export default pokemonReducer;
