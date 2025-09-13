import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";


type ChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function Chip({ label, selected, onPress }: ChipProps) {
  return (
    <TouchableOpacity
      style={[styles.chip, selected && styles.chipSelected]}
      onPress={onPress}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    margin: 4,
  },
  chipSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.text,
  },
  textSelected: {
    color: "#fff",
    fontFamily: Fonts.medium,
  },
});
