import { Text, View, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  const onButtonPress = () => {
    onPress();
  };

  return (
    <Pressable onPress={onButtonPress}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72053c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
