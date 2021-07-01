import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as colors from "../../component/common/colors";

export const Convertercard = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "white",
  },
  cont: {
    backgroundColor: colors.orange,
    width: "95%",
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
    height: 80,
    justifyContent: "center",
    alignSelf: "center",
  },
});
