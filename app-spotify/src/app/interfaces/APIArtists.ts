import { ExternalUrls } from './external-Urls'
import { Followers } from './followers'
import { Images } from './image'

export interface APIArtist {
    external_urls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Images;
    name: string;
    popularity: number;
    type: string;
    uri: string;
}