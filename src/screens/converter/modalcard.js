import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Modalcard = ({ onPress, id, description }) => {
  return (
    <View>
      <TouchableOpacity style={styles.cont} onPress={onPress}>
        <Text style={styles.title}>{id}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cont} onPress={onPress}>
        <Text style={styles.title}>{description}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 14,
  },
  cont: {
    backgroundColor: "wheat",
    width: "95%",
    borderRadius: 5,
    alignItems: "center",

    marginLeft: 10,
    marginTop: 20,

    justifyContent: "center",
  },
});
