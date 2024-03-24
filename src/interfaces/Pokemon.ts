export interface Pokemon {
    name: string;
    id: number;
    urlImage: string;
    weight: number;
    height: number;
    evolutions: Array<{ name: string,  urlImage: string }>;
    types: Array<{ name: string }>;
    moves: Array<{ name: string }>;
    stats: Array<{ name: string,  baseStat: number }>;
    abilities: Array<{ name: string }>;
}
