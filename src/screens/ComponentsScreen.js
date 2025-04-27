import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "hello world";
  const anotherGreeting = <Text>Hello to you</Text>;
  return (
    <View>
      {" "}
      <Text style={styles.textStyle}>This is the component screen</Text>
      <Text style={{ fontSize: 20 }}>Hi there !</Text>
      <Text>{greeting}</Text>
      {anotherGreeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
