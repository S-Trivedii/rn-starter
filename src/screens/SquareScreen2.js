import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

// reducer are always created outside component
const reducer = (state, action) => {
  /*

    how state and action look like.
    // state === { red: 0, blue: 0, green: 0};
    // action === {colorToChange: 'red' || 'blue' || 'green', amount: 15 || -15}

    Action are responsible to change the state but not directly. For e.g.
    state.red + state.amount  --> This is wrong

 

    */

  switch (action.colorToChange) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state; // we must return something other wise it will give an error
      }
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

  // we can name dispatch like runReducer

  const { red, green, blue } = state;

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

// ----------------

/*
Our action object had...
{colorToChange: 'red', amount: 15}


Usually, by convention, we'll instead use:
{type: 'change_red', payload: 15}


type - string that describes the exact change operation we want to make
payload - some data that is critical to the change operation

You can see the below code how will it look like after following convention.

*/

// FOLLOWING CONVENTION - DEVELOPERS FOLLOW THIS CONVENTION

// const reducer = (state, action) => {

//     switch (action.type) {
//       case "change_red":
//         if (state.red + action.payload > 255 || state.red + action.payload < 0) {
//           return state; // we must return something otherwise it will give an error
//         }
//         return { ...state, red: state.red + action.payload };
//       case "change_blue":
//         return { ...state, blue: state.blue + action.payload };
//       case "change_green":
//         return { ...state, green: state.green + action.payload };
//       default:
//         return state;
//     }
//   };

//   const SquareScreen2 = () => {
//     const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });

//     const { red, green, blue } = state;

//     return (
//       <View>
//         <ColorCounter
//           color="red"
//           onIncrease={() => dispatch({ type: "change_red", payload: 15 })}
//           onDecrease={() => dispatch({ type: "change_red", payload: -1 * 15 })}
//         />
//         <ColorCounter
//           color="blue"
//           onIncrease={() => dispatch({ type: "change_blue", payload: 15 })}
//           onDecrease={() => dispatch({ type: "change_blue", payload: -1 * 15 })}
//         />
//         <ColorCounter
//           color="green"
//           onIncrease={() => dispatch({ type: "change_green", payload: 15 })}
//           onDecrease={() => dispatch({ type: "change_green", payload: -1 * 15 })}
//         />

//         <View
//           style={{
//             height: 150,
//             width: 150,
//             backgroundColor: `rgb(${red},${green},${blue})`,
//           }}
//         />
//       </View>
//     );
//   };

//   const style = StyleSheet.create({});

//   export default SquareScreen2;
