import { ExternalUrls } from '../../interfaces/external-Urls'
import { Followers } from '../../interfaces/followers'
import { Images } from '../../interfaces/image'

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