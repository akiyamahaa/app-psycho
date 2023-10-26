import { StyleSheet } from "react-native";
import React from "react";
import { Text, Box, VStack } from "native-base";
import Header from "../components/Header";
import CardItem from "../components/CardItem";
import { posts } from "../data/data";

type Props = {};

const Problem = (props: Props) => {
  const type = "problem";
  const handleSearch = (textSearch: string) => {};
  return (
    <Box flex={1} bgColor={"#fff"}>
      <Header handleSearch={handleSearch} />
      <Box p={4} borderBottomWidth={0.5} borderColor={"primary.600"}>
        <Text fontSize={20} fontWeight={"bold"} textTransform={"uppercase"}>
          Các vấn đề tâm lý ở học sinh
        </Text>
      </Box>
      <VStack p={4} space={4}>
        {posts[type].map((cont,idx) => (
          <Box key={cont.id}>
            <CardItem data={cont} idx={idx} type={type} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Problem;

const styles = StyleSheet.create({});
