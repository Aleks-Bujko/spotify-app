import { Album } from './album';
export interface Artist {
    id: number;
    name: string;
    genres: any;
    albums: Album[];
}

export interface Artists extends Array<Artist> {}