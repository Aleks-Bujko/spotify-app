import { Artists } from '../../interfaces/artist';
import { Albums } from '../../interfaces/album';

export interface APISearch {
    artists: Artists,
    tracks: Albums
}