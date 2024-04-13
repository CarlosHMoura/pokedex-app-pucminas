export interface Stat {
    name: string;
    baseStat: number;
}

export interface Evolution {
    name: string;
    urlImage: string;
}

export interface Pokemon {
    id: number;
    urlImage: string;
    name: string;
    types: string[];
    height: number;
    weight: number;
    abilities: string[];
    moves: string[];
    stats: Stat[];
    evolutions: Evolution[];
}
