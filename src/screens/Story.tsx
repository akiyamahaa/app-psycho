import { StyleSheet } from "react-native";
import React from "react";
import { Text, Box, VStack } from "native-base";
import Header from "../components/Header";

type Props = {};

const Story = (props: Props) => {
  const handleSearch = (textSearch: string) => {};

  return (
    <Box flex={1} bgColor={"#fff"}>
      <Header handleSearch={handleSearch} />
      <Box p={4} borderBottomWidth={0.5} borderColor={"primary.600"}>
        <Text fontSize={20} fontWeight={"bold"} textTransform={"uppercase"}>
          Các câu chuyện tích cực
        </Text>
      </Box>
      <VStack p={4}>{/* <CardItem data={}/> */}</VStack>
    </Box>
  );
};

export default Story;

const styles = StyleSheet.create({});
