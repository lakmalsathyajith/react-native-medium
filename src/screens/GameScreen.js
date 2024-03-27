import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <Card>
        <View style={styles.userGuess}>
          <Text style={styles.userGuessText}>55</Text>
        </View>
        <Text style={styles.buttonsHeading}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>+</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton>-</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  userGuess: {
    padding: 25,
    borderColor: "#ddb52f",
    borderWidth: 2,
    borderRadius: 8,
    width: "80%",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  userGuessText: {
    color: "#ddb52f",
    fontSize: 32,
    fontWeight: "bold",
  },
  buttonsHeading: {
    color: "white",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default GameScreen;
