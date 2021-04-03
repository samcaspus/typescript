
export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";


export type pokemonType = {
    abilities: pokemonability[]
}


export type pokemonability = {
    ability: {
        name: string,
        url: string
    }
}

export interface pokemonLoading {
    type: typeof POKEMON_LOADING

}

export interface pokemonSuccess{
    type: typeof POKEMON_SUCCESS,
    payload: pokemonType
}

export interface pokemonFail{
    type: typeof POKEMON_FAIL
}


type pokemonDispatchTypes = pokemonLoading | pokemonSuccess|pokemonFail;

export default pokemonDispatchTypes;