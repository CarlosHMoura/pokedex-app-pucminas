export interface Pokemon {
    name: string;
    id: number;
    url: string;
    imageUrl: string;
    animatedImageUrl: string;
    weight: number;
    height: number;
    base_experience: number;
    types: Array<{ type: { name: string } }>;
    moves: Array<{ move: { name: string } }>;
    stats: Array<{ base_stat: number, stat: { name: string } }>;
    abilities: Array<{ ability: { name: string } }>;
}

export interface PokemonList {
    results: Pokemon[];
}