import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const styles = StyleSheet.create({
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
});

export default Card;
