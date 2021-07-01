import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import * as colors from "../../component/common/colors";

export const Input = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
  label,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        value={value}
        keyboardType={type}
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor={colors.orange}
        onChangeText={onChange}
        secureTextEntry={secure}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 15,
  },

  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: colors.orange,
    height: 50,
    marginBottom: 10,
    alignSelf: "center",
    paddingHorizontal: 10,
  },
});
