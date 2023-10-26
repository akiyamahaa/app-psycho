import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { Box, ScrollView, Text, VStack } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";
import { posts } from "../data/data";
import { Image } from "expo-image";

type Props = {} & NativeStackScreenProps<RootStackParams, "PostDetail">;

const PostDetail = (props: Props) => {
  const { navigation, route } = props;
  const { idx, type } = route.params;

  const data = posts[type][idx];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.title,
      headerBackTitleVisible: false,
      headerShown: true,
    });
  }, []);

  return (
    <Box flex={1} bgColor={"#fff"}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <Image
            source={{ uri: data.image }}
            style={{ width: "100%", height: 200 }}
          />
        </Box>
        {/* Body */}
        <Box p={4}>
          <Box>
            <Text fontSize={14} fontWeight={300}>
              {data.subTitle}
            </Text>
          </Box>
          {/* Content */}
          <VStack space={2}>
            {data.content.map((cont, idx) => (
              <VStack key={`${cont}-${idx}`} space={2}>
                {cont.title && (
                  <Text fontSize={18} fontWeight={"bold"} color={"primary.600"}>
                    {cont.title}
                  </Text>
                )}
                {cont.image && (
                  <VStack width={"100%"} alignItems={"center"}>
                    <Image
                      source={{ uri: cont.image }}
                      style={{ width: "70%", height: 150 }}
                    />
                    <Box
                      p={1}
                      bgColor={"muted.100"}
                      width={"70%"}
                      alignItems={"center"}
                    >
                      <Text color={"primary.600"}>{cont.caption}</Text>
                    </Box>
                  </VStack>
                )}
                <Text>{cont.body}</Text>
              </VStack>
            ))}
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default PostDetail;

const styles = StyleSheet.create({});
