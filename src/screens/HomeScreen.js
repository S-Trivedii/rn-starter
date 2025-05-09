import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // console.log(props)
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => console.log("List pressed")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>

      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go to List Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to Image Screen"
      />

      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />

      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go to Color Screen"
      />

      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Go to Square Screen"
      />

      <Button
        onPress={() => props.navigation.navigate("Text")}
        title="Go to Text Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
