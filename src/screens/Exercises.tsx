import { StyleSheet } from "react-native";
import React from "react";
import { Text, Box, VStack } from "native-base";
import Header from "../components/Header";
import { posts } from "../data/data";
import CardItem from "../components/CardItem";

type Props = {};

const Exercises = (props: Props) => {
  const handleSearch = (textSearch: string) => {};
  const type = "exercise";

  return (
    <Box flex={1} bgColor={"#fff"}>
      <Header handleSearch={handleSearch} />
      <Box p={4} borderBottomWidth={0.5} borderColor={"primary.600"}>
        <Text fontSize={20} fontWeight={"bold"} textTransform={"uppercase"}>
          Các bài tập phục hồi
        </Text>
      </Box>
      <VStack p={4} space={4}>
        {posts[type].map((cont, idx) => (
          <Box key={cont.id}>
            <CardItem data={cont} idx={idx} type={type} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Exercises;

const styles = StyleSheet.create({});
