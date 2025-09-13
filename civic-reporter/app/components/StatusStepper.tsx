import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";

type StatusStepperProps = {
  currentStep: number;
};

const steps = ["Pending", "Assigned", "Resolved"];

export default function StatusStepper({ currentStep }: StatusStepperProps) {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <View
            style={[
              styles.circle,
              index <= currentStep && { backgroundColor: Colors.primary },
            ]}
          />
          <Text
            style={[
              styles.label,
              index <= currentStep && { color: Colors.primary, fontFamily: Fonts.medium },
            ]}
          >
            {step}
          </Text>
          {index < steps.length - 1 && <View style={styles.line} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.surface,
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: Colors.border,
    marginHorizontal: 8,
  },
  label: {
    marginLeft: 6,
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.muted,
  },
});
