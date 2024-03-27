import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "./src/screens/HomeScreen";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
  const [userEnteredValue, setUserEnteredValue] = useState(null);

  let screenComponent = (
    <HomeScreen setUserEnteredValue={setUserEnteredValue} />
  );
  if (userEnteredValue) {
    screenComponent = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageItem}
      >
        <SafeAreaView style={styles.container}>{screenComponent}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImageItem: {
    opacity: 0.15,
  },
});
