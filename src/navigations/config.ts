import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParams = {
  Home: undefined;
  Problems: undefined;
  Stories: undefined;
  Exercises: undefined;
  Songs: undefined;
  PostDetail: {
    idx: number;
    type: string;
  };
  MusicVideo: {
    youtubeId: string;
  };
};
