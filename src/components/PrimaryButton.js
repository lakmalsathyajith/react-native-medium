import { Text, View, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children, onButtonPress }) => {
  const onPress = () => {
    console.log("------");
    //onButtonPress()
  };

  return (
    <Pressable onPress={onPress}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

export default PrimaryButton;
