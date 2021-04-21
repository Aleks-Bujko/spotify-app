import { Album } from './album';
import { ExternalUrls } from './external-Urls';
export interface Artist {
    external_urls: ExternalUrls
    href: string;
    id: number;
    name: string;
    genres: any;
    albums: Album[];
}

export interface Artists extends Array<Artist> {}