import { Artist } from './artist';
import { Images } from './image';

export interface FormattedNewReleases{
    id: string;
    images: Images;
    name: string;
    artists: Artist[];
    type: string;
}

export interface Albums {
    href: string;
    items: NewReleasesItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}

export interface NewReleasesItem {
    album_type: 'album' | 'single';
    artists: Artist[];
    available_markets: string[];
    external_urls: string;
    href: string;
    id: string;
    images: Images;
    name: string;
    release_date: Date;
    release_date_precision: "day";
    total_tracks: number;
    type: 'album' | 'single';
    uri: string;
}

export interface APINewReleases {
    albums: Albums;
}
