import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";

const HomeScreen = ({ setUserEnteredValue }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const resetEnteredValue = () => {
    setEnteredValue("");
  };

  const onConfirmValue = () => {
    const enteredValueParsed = parseInt(enteredValue);
    if (
      enteredValueParsed === 0 ||
      enteredValueParsed > 99 ||
      isNaN(enteredValueParsed)
    ) {
      Alert.alert(
        "Invalid Number!",
        "The entered value is not valid. value should be between 0 - 99",
        [{ text: "OK", style: "destructive", onPress: resetEnteredValue }]
      );
    } else {
      setUserEnteredValue(enteredValue);
    }
  };

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <Card>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredValue}
          onChangeText={setEnteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonItemContainer}>
            <PrimaryButton onPress={resetEnteredValue}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonItemContainer}>
            <PrimaryButton onPress={onConfirmValue}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  mainHeading: {
    paddingBottom: 20,
    fontSize: 24,
    color: "#ddb52f",
  },
  inputContainer: {
    backgroundColor: "#4e0329",
    color: "white",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
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
