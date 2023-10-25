import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParams = {
  Home: undefined;
  Problems: undefined;
  Stories: undefined;
  Exercises: undefined;
  Songs: undefined;
  PostDetail: {
    id: string;
    type: string;
  };
  MusicVideo: {
    youtubeId: string;
  };
};
