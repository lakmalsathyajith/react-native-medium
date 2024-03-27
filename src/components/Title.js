import { View, Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 16,
    borderColor: "white",
    marginHorizontal: 32,
    fontSize: 32,
    marginBottom: 24,
    borderRadius: 4,
  },
  titleText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});

export default Title;
