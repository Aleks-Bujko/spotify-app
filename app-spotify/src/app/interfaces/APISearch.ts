import { Artists } from './artist';
import { Albums } from './album';

export interface APISearch {
    artists: Artists,
    tracks: Albums
}