import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";
import LoadingOverlay from "../components/LoadingOverlay";
import { RootStackParams } from "./config";
import Home from "../screens/Home";
import { useTheme } from "native-base";
import { StatusBar } from "expo-status-bar";
import Story from "../screens/Story";
import Songs from "../screens/Songs";
import Problem from "../screens/Problem";
import Exercises from "../screens/Exercises";
import PostDetail from "../screens/PostDetail";
import MusicVideo from "../screens/MusicVideo";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const { colors } = useTheme();
  return (
    <>
      <StatusBar style="light" />
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: colors.primary[600],
            },
            headerTintColor: "white",
            headerTitleStyle: { fontSize: 20 },
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            component={Home}
            name="Home"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={Story}
            name="Stories"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={Songs}
            name="Songs"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={Problem}
            name="Problems"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={Exercises}
            name="Exercises"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={PostDetail}
            name="PostDetail"
            options={{
              headerShown: false,
            }}
          />
                 <Stack.Screen
            component={MusicVideo}
            name="MusicVideo"
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
