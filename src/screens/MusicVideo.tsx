import { Dimensions, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import YoutubePlayer from "react-native-youtube-iframe";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";
import { Box } from "native-base";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

type Props = {} & NativeStackScreenProps<RootStackParams, "MusicVideo">;
const MusicVideo = (props: Props) => {
  const { route } = props;
  const { youtubeId } = route.params;

  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#000"}
      style={{ transform: [{ rotate: "90deg" }] }}
    >
      <StatusBar hidden />
      <YoutubePlayer
        videoId={youtubeId || ""}
        // width={windowWidth}
        // height={windowWidth * 0.75}
        height={SCREEN_WIDTH}
        // video width -> screen height
        width={SCREEN_HEIGHT}
        // prevent aspect ratio auto sizing
        webViewProps={{
          injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            element.style.paddingBottom = 'unset';
            true;
          `,
        }}
      />
    </Box>
  );
};

export default MusicVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    transform: "rotate(90deg)",
  },
});
