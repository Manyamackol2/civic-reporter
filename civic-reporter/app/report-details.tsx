import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import StatusStepper from "@/components/StatusStepper";
import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/typography';

type Update = {
  id: string;
  text: string;
  time: string;
};

export default function ReportDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const report = {
    title: "Pothole near Market",
    category: "Road",
    location: "MG Road",
    currentStep: 1,
    updates: [
      { id: "1", text: "✅ Report submitted", time: "2 hrs ago" },
      { id: "2", text: "👷 Assigned to Road Dept.", time: "1 hr ago" },
    ] as Update[],
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={styles.header}>Report Details</Text>

      <View style={styles.info}>
        <Text style={styles.title}>{report.title}</Text>
        <Text style={styles.meta}>Category: {report.category}</Text>
        <Text style={styles.meta}>Location: {report.location}</Text>
      </View>

      <View style={styles.stepperContainer}>
        <StatusStepper currentStep={report.currentStep} />
      </View>

      <Text style={styles.sectionHeader}>Updates</Text>
      {report.updates.map((update) => (
        <View key={update.id} style={styles.updateCard}>
          <Text style={styles.updateText}>{update.text}</Text>
          <Text style={styles.time}>{update.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontFamily: Fonts.semiBold,
    marginBottom: 16,
  },
  info: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.medium,
  },
  meta: {
    fontSize: 14,
    color: Colors.muted,
    marginTop: 4,
  },
  stepperContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    marginBottom: 12,
  },
  updateCard: {
    backgroundColor: Colors.surface,
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 1,
  },
  updateText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  time: {
    fontSize: 12,
    color: Colors.muted,
    marginTop: 4,
  },
});
