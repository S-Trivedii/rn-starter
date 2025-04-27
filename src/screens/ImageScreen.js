import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Beach"
        imageSrc={require("../../assets/beach.jpg")}
        score={9}
      />
      <ImageDetail
        title="Mountain"
        imageSrc={require("../../assets/forest.jpg")}
        score={4}
      />
      <ImageDetail
        title="Forest"
        imageSrc={require("../../assets/mountain.jpg")}
        score={7}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
