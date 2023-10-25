import { Box, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import store from "./src/store";
import { useEffect } from "react";

import appTheme from "./src/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Root from "./src/navigations/Root";

// SplashScreen.preventAutoHideAsync();
export default function App() {
  // let [fontsLoaded] = useFonts({

  // });

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <NativeBaseProvider theme={appTheme}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
