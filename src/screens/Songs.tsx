import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Box, VStack, HStack } from "native-base";
import Header from "../components/Header";
import CardSound from "../components/CardSound";
import { sounds } from "../data/data";

type Props = {};

const Songs = (props: Props) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const handleSearch = (textSearch: string) => {};

  const onVideoScreen = () => {};

  return (
    <Box flex={1} bgColor={"#fff"}>
      <Header handleSearch={handleSearch} />
      <Box p={4} borderBottomWidth={0.5} borderColor={"primary.600"}>
        <Text fontSize={20} fontWeight={"bold"} textTransform={"uppercase"}>
          Các bản nhạc thư giãn
        </Text>
      </Box>
      <VStack p={4}>
        {/* <CardItem data={}/> */}
        {sounds.map((sound) => (
          <Box key={sound.id}>
            <CardSound soundData={sound} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Songs;

const styles = StyleSheet.create({});
