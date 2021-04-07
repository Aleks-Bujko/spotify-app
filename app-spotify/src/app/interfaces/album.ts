export interface Album {
    id: string;
    name: string;
}

export interface Albums extends Array<Album> {}