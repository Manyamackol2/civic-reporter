import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontFamily: Fonts.medium,
    fontSize: 16,
  },
});
