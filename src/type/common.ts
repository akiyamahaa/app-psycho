export interface IData {
  [key: string]: IContent[];
}

export interface ISound {
  id: string;
  name: string;
  author: string;
  youtubeId: any;
}

export interface IContent {
  id: string;
  title: string;
  image: string;
  subTitle: string;
  content: {
    title: string;
    image?: string;
    caption?:string;
    body: string;
  }[];
}
