import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + 15);
        return red;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return blue;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return green;
      default:
        break;
    }
  };
  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => setColor("red", 15)}
        onDecrease={() => setColor("red", -15)}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => setColor("blue", 15)}
        onDecrease={() => setColor("blue", -15)}
      />
      <ColorCounter
        color="green"
        onIncrease={() => setColor("green", 15)}
        onDecrease={() => setColor("green", -15)}
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
