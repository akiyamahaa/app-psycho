import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Box, HStack, Icon, Input, useTheme } from "native-base";
import { HambergerMenu, SearchNormal } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  handleSearch: any;
};

const SearchingBar = ({ handleSearch }: any) => {
  const { colors } = useTheme();
  const [textSearch, setTextSearch] = useState("");
  return (
    <Box>
      <Input
        value={textSearch}
        onChangeText={setTextSearch}
        backgroundColor={"#fff"}
        borderRadius={100}
        px={1.5}
        py={3}
        placeholder="Tìm kiếm"
        placeholderTextColor={colors.muted[400]}
        InputLeftElement={
          <TouchableOpacity onPress={() => handleSearch(textSearch)}>
            <Icon
              as={<SearchNormal size="16" color={colors.muted[400]} />}
              size={5}
              ml="2"
              color="muted.400"
            />
          </TouchableOpacity>
        }
      />
    </Box>
  );
};

const Header = (props: Props) => {
  const navigation = useNavigation<any>();
  const { handleSearch } = props;
  const { colors } = useTheme();
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"primary.600"}
      safeAreaTop
      pb={4}
      px={4}
    >
      <Box size={8} />
      <Box width={"80%"}>
        <SearchingBar handleSearch={handleSearch} />
      </Box>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Box>
          <HambergerMenu size="32" color={colors.white} />
        </Box>
      </TouchableOpacity>
    </HStack>
  );
};

export default Header;

const styles = StyleSheet.create({});
