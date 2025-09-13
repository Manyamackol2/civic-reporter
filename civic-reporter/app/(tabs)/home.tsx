import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";
import Card from "@/components/Card";
import StatusStepper from "@/components/StatusStepper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  const recentReports = [
    { id: "1", title: "Pothole near Market", category: "Road", location: "MG Road", status: 0 },
    { id: "2", title: "Streetlight not working", category: "Electricity", location: "Park Street", status: 1 },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>Hello, User 👋</Text>
        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => router.push("/profile")}
        >
          <Ionicons name="person-circle-outline" size={36} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.quickButton}
          onPress={() => router.push("/new-report")}
        >
          <Text style={styles.quickButtonText}>New Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickButton}
          onPress={() => router.push("/points")}
        >
          <Text style={styles.quickButtonText}>View Points</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeader}>Recent Reports</Text>
      {recentReports.map((report) => (
        <Card key={report.id} style={styles.reportCard}>
          <Text style={styles.reportTitle}>{report.title}</Text>
          <Text style={styles.reportMeta}>
            {report.category} • {report.location}
          </Text>
          <StatusStepper currentStep={report.status} />
        </Card>
      ))}

      <Text style={styles.sectionHeader}>Trending Issues</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card style={[styles.trendingCard, { backgroundColor: Colors.primary }]}>
          <Text style={[styles.trendingText, { color: "#fff" }]}>Water Leakage near Mall</Text>
        </Card>
        <Card style={[styles.trendingCard, { backgroundColor: Colors.secondary }]}>
          <Text style={[styles.trendingText, { color: "#fff" }]}>Broken Streetlight</Text>
        </Card>
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
    marginTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontFamily: Fonts.semiBold,
    color: Colors.text,
  },
  profileIcon: {},
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  quickButton: {
    flex: 0.48,
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  quickButtonText: {
    color: "#fff",
    fontFamily: Fonts.medium,
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    color: Colors.text,
    marginVertical: 12,
  },
  reportCard: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: Colors.surface,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  reportTitle: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: Colors.text,
  },
  reportMeta: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: Colors.muted,
    marginVertical: 4,
  },
  trendingCard: {
    padding: 20,
    borderRadius: 16,
    marginRight: 12,
  },
  trendingText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
});
