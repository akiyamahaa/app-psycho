import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, Box } from "native-base";
import Header from "../components/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams, "Home">;

const menuList = [
  {
    title: "Các vấn đề tâm lý",
    route: "Problems",
  },
  {
    title: "Các câu chuyện tích cực",
    route: "Stories",
  },
  {
    title: "Các bài tập phục hồi tinh thần",
    route: "Exercises",
  },
  {
    title: "Các bản nhạc thư giãn",
    route: "Songs",
  },
];

const Home = (props: Props) => {
  const { navigation } = props;
  const handleSearch = (textSearch: string) => {};
  return (
    <Box flex={1} bgColor={"#fff"}>
      <Header handleSearch={handleSearch} />
      {menuList.map((elm) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(elm.route as any);
          }}
          key={elm.title}
        >
          <Box px={4}>
            <Box
              alignItems={"center"}
              py={4}
              borderBottomWidth={1}
              borderColor={"muted.200"}
            >
              <Text
                color={"primary.600"}
                textTransform={"uppercase"}
                fontWeight={700}
                fontSize={16}
              >
                {elm.title}
              </Text>
            </Box>
          </Box>
        </TouchableOpacity>
      ))}
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
