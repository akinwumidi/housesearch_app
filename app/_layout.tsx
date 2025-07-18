import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
        "Rubik-Medium":require("../assets/fonts/Rubik-Medium.ttf"),
          "Rubik-Regular":require("../assets/fonts/Rubik-Regular.ttf"),
          "Rubik-Bold":require("../assets/fonts/Rubik-Bold.ttf",),
          "Rubik-ExtraBold":require("../assets/fonts/Rubik-ExtraBold.ttf"),
          "Rubik-SemiBold":require("../assets/fonts/Rubik-SemiBold.ttf"),
          "Rubik-Light":require("../assets/fonts/Rubik-Light.ttf")
  })

  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }
  return <Stack screenOptions={{headerShown:false}} />;
}
