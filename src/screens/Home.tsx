import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";

type Props = {};

const Home = (props: Props) => {
  return (
    <Box flex={1} justifyContent={"center"} alignItems={"center"}>
      <Text>Home</Text>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
