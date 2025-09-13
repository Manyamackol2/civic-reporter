import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Card from "@/components/Card";
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";
import { useRouter } from "expo-router"; 


const leaderboard = [
  { name: "Amit Sharma", points: 320, rank: 1 },
  { name: "Priya Verma", points: 280, rank: 2 },
  { name: "Rohit Singh", points: 250, rank: 3 },
  { name: "You", points: 120, rank: 12 },
];

export default function Points() {
  const router = useRouter(); 

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <Text style={styles.header}>My Points</Text>

      <Card style={styles.pointsCard}>
        <Text style={styles.points}>120 Points</Text>
        <Text style={styles.subText}>Earned by reporting 5 civic issues</Text>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "60%" }]} />
        </View>
        <Text style={styles.progressText}>60% to next level</Text>
      </Card>

      <Text style={styles.sectionHeader}>How to Earn</Text>
      <Card style={styles.infoCard}>
        <Text style={styles.infoText}>📷 Report a valid civic issue</Text>
        <Text style={styles.infoText}>✅ Confirm/validate existing reports</Text>
        <Text style={styles.infoText}>📝 Give feedback after resolution</Text>
      </Card>

      <Text style={styles.sectionHeader}>Badges</Text>
      <View style={styles.badges}>
        <Card style={styles.badgeCard}>
          <Text style={styles.badgeText}>🏆 Civic Hero</Text>
        </Card>
        <Card style={styles.badgeCard}>
          <Text style={styles.badgeText}>🌱 Eco Guardian</Text>
        </Card>
        <Card style={[styles.badgeCard, styles.lockedBadge]}>
          <Text style={styles.badgeText}>🔒 Road Safety Hero</Text>
        </Card>
      </View>

      <Text style={styles.sectionHeader}>Leaderboard</Text>
      <Card style={styles.infoCard}>
        {leaderboard.map((item, index) => (
          <View key={index} style={styles.leaderboardItem}>
            <Text style={styles.leaderRank}>
              {item.rank <= 3 ? "🏅" : "#"}
              {item.rank}
            </Text>
            <Text style={styles.leaderName}>{item.name}</Text>
            <Text style={styles.leaderPoints}>{item.points}</Text>
          </View>
        ))}
      </Card>

      <Text style={styles.sectionHeader}>Rewards & Recognition</Text>
      <Card style={styles.infoCard}>
        <Text style={styles.infoText}>🎁 Redeem points for coupons & raffles</Text>
        <Text style={styles.infoText}>📜 Earn certificates from NGOs & Municipality</Text>
        <Text style={styles.infoText}>⭐ Get titles like “Clean City Champion”</Text>
        <Text style={styles.infoText}>🚀 Priority feedback to municipal officers</Text>
      </Card>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/redeem")} 
        >
          <Text style={styles.buttonText}>Redeem Points</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => router.push("/badges")} 
        >
          <Text style={styles.buttonText}>View Badges</Text>
        </TouchableOpacity>
      </View>
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
  header: {
    fontSize: 22,
    fontFamily: Fonts.semiBold,
    marginBottom: 12,
    color: Colors.text,
  },
  pointsCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: Colors.surface,
    shadowColor: Colors.primary,
    shadowOpacity: 0.05,
    elevation: 2,
    alignItems: "center",
  },
  points: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  subText: {
    fontSize: 14,
    color: Colors.muted,
    marginTop: 4,
    fontFamily: Fonts.regular,
  },
  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: Colors.muted + "33",
    borderRadius: 4,
    marginTop: 12,
  },
  progressFill: {
    height: 8,
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: Fonts.regular,
    color: Colors.muted,
  },
  sectionHeader: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    marginTop: 20,
    marginBottom: 10,
    color: Colors.text,
  },
  infoCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: Colors.surface,
    shadowColor: Colors.primary,
    shadowOpacity: 0.05,
    elevation: 1,
  },
  infoText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginVertical: 4,
  },
  badges: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  badgeCard: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    shadowColor: Colors.primary,
    shadowOpacity: 0.05,
    elevation: 2,
    alignItems: "center",
    minWidth: 120,
    marginBottom: 10,
  },
  lockedBadge: {
    opacity: 0.5,
  },
  badgeText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.text,
  },
  leaderboardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  leaderRank: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    width: 50,
  },
  leaderName: {
    fontSize: 14,
    flex: 1,
    fontFamily: Fonts.regular,
  },
  leaderPoints: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginRight: 8,
    padding: 12,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonSecondary: {
    flex: 1,
    marginLeft: 8,
    padding: 12,
    backgroundColor: Colors.surface,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.text,
  },
});
