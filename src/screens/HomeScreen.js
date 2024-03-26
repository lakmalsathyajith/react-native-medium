import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainHeading}>Guess My Number</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonItemContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonItemContainer}>
            <PrimaryButton>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4e0329",
    color: "white",
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 100,
    elevation: 100,
    shadowColor: "#72063c",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeading: {
    paddingBottom: 20,
    marginBottom: 20,
    fontSize: 24,
    color: "#ddb52f",
  },
  inputContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonItemContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginBottom: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
