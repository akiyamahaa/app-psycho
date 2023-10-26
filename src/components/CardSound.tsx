import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import { PlayCricle } from "iconsax-react-native";
import { ISound } from "../type/common";
import { useNavigation } from "@react-navigation/native";

type Props = {
  soundData: ISound;
};
const CardSound = (props: Props) => {
  const navigation = useNavigation<any>();
  const { soundData } = props;

  const onPlayVideo = () => {
    navigation.navigate("MusicVideo", {
      youtubeId: soundData.youtubeId,
    });
  };

  return (
    <TouchableOpacity onPress={onPlayVideo}>
      <Box borderBottomWidth={0.5} borderColor={"primary.600"} py={4}>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <VStack>
            <Text fontSize={16} fontWeight={700}>
              {soundData.name}
            </Text>
            <Text fontSize={12} fontWeight={400}>
              {soundData.author}
            </Text>
          </VStack>
          <Box>
            <PlayCricle size={32} color="black" />
          </Box>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default CardSound;

const styles = StyleSheet.create({});
