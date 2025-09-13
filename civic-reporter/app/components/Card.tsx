import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@/constants/colors";

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export default function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});
