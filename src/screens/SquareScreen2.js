import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

// reducer are always created outside component
const reducer = (state, action) => {
  /*

    how state and action look like.
    // state === { red: 0, blue: 0, green: 0};
    // action === {colorToChange: 'red' || 'blue' || 'green', amount: 15 || -15}

    action are responsible to change the state but not directly. For e.g.
     state.red + state.amount  --> This is wrong

    */

  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount }; // not changing state directly and returning a value
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    default:
      return state;
  }
};

const SquareScreen2 = () => {
  // state is the first object and dispatch is the second object
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  // state === { red: 0, blue: 0, green: 0 }

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => dispatch({ colorToChange: "red", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "red", amount: -1 * 15 })}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => dispatch({ colorToChange: "blue", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "blue", amount: -1 * 15 })}
      />
      <ColorCounter
        color="green"
        onIncrease={() => dispatch({ colorToChange: "green", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "green", amount: -1 * 15 })}
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

export default SquareScreen2;

/*

What are Reducers ?

reducer is a very fancy name instead we can call it - FunctionThatManagesChangesToAnObject
 

- Function that gets called with two objects
- Argument #1 - object that has all of our state in it --> {  red: 0, green: 0, blue: 0 }
- Argument #2 - object that describes the update we want to make --> { colorTochange: 'red', amount: 15 }
- We look at argument #2 and use it to decide how to change argument #1
- Two technicalities - 1) we never change argument #1 directly. 2) we must always return a value to be used as argument #1.

*/
