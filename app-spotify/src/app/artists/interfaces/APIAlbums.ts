import { Artists } from '../../interfaces/artist';
import { Images } from '../../interfaces/image';
import { ExternalUrls } from '../../interfaces/external-Urls';

export interface APIAlbums {
    href: string;
    items: AlbumItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}

export interface AlbumItem {
    album_group: "album" | "single" ;
    album_type: "album" | "single" ;
    artists: Artists;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Images;
    name: string;
    release_date: Date;
    release_date_precision: "day";
    total_tracks: number;
    type: "album" | "single" ;
    uri: string;
}