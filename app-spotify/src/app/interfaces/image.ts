export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Images extends Array<Image> {}