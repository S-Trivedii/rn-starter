import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 35 },
    { name: "Friend 2", age: 34 },
    { name: "Friend 3", age: 87 },
    { name: "Friend 4", age: 76 },
    { name: "Friend 5", age: 67 },
    { name: "Friend 6", age: 33 },
    { name: "Friend 7", age: 87 },
    { name: "Friend 8", age: 22 },
    { name: "Friend 9", age: 90 },
  ];
  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>{item.name}</Text>;
            <Text style={styles.textStyle}>{item.age}</Text>;
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
  
});

export default ListScreen;
