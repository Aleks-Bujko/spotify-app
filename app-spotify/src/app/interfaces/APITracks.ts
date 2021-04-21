import { Album } from './album';
import { ExternalUrls } from './external-Urls';
import { Artists } from './artist';

export interface APITracks {
    track: Tracks;
}

export interface Track {
    album: Album;
    artists: Artists;
    explicit: boolean;
    duration_ms: number;
    external_ids: ExternalIDs;
    external_urls: ExternalUrls;
    href: string;
    name: string;
    total_tracks: number;
    type: "track";
    uri: string
    is_local: boolean;
    is_playable: boolean;
    popularity: number;
    preview_url: null | string;
}

export interface ExternalIDs {
    external_ids: string;
}

export interface Tracks extends Array<Track> {}