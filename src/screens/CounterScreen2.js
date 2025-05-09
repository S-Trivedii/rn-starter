import { useReducer } from "react";
import { Button, Text, View } from "react-native";

const reducer = (state, action) => {
  // action is responsible to update state
  // state ==== {counter: 0}
  // you cannot update state directly like this -> state.counter + action.amount - wrong

  if (action.type === "increase_counter") {
    // updating state but not directly and returning it
    return { ...state, counter: state.counter + action.payload };
  } else if (action.type === "decrease_counter") {
    return { ...state, counter: state.counter - action.payload };
  } else {
    return state;
  }
};

const CounterScreen2 = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Button
        title="Increase counter"
        onPress={() => dispatch({ type: "increase_counter", payload: 1 })}
      />
      <Text>Current counter: {state.counter}</Text>
      <Button
        title="Decrease counter"
        onPress={() => dispatch({ type: "decrease_counter", payload: 1 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen2;
