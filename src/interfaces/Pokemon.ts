export interface Pokemon {
    name: string;
    url: string;
    imageUrl: string;
}

export interface ApiResponse {
    results: Pokemon[];
}