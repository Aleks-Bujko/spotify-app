import { Images } from './image';
import { Artists } from './artist'
import { ExternalUrls } from './external-Urls';
export interface Album {
    album_type: "single" | "album";
    artists: Artists;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Images;
    name: string;
    release_date: Date;
    release_date_precision: "day";
    total_tracks: number;
    type: "single" | "album";
    uri: string;
}

export interface Albums extends Array<Album> {}