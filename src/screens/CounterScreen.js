import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase counter"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Text>Current counter: {counter}</Text>
      <Button
        title="Increase counter"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
