import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import { Image } from "expo-image";
import { IContent } from "../type/common";
import { useNavigation } from "@react-navigation/native";

type Props = {
  data: IContent;
  type: string;
  idx: number;
};

const CardItem = (props: Props) => {
  const navigation = useNavigation<any>();
  const { data, type, idx } = props;

  const handleDetail = () => {
    navigation.navigate("PostDetail", {
      idx: idx,
      type: type,
    });
  };
  return (
    <TouchableOpacity onPress={handleDetail}>
      <Box width={"100%"}>
        <HStack width={"100%"} alignItems={"center"} space={2}>
          <Box width={"45%"}>
            <Image
              source={{
                uri: data.image,
              }}
              style={{
                width: "100%",
                height: 120,
                borderRadius: 12,
              }}
            />
          </Box>
          <VStack flex={1}>
            <Box flex={1} justifyContent={"center"}>
              <Text
                fontSize={16}
                fontWeight={700}
                ellipsizeMode="tail"
                numberOfLines={2}
              >
                {data.title}
              </Text>
            </Box>
            <Box flex={1}>
              <Text
                fontSize={14}
                fontWeight={400}
                ellipsizeMode="tail"
                numberOfLines={2}
              >
                {data.subTitle}
              </Text>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
