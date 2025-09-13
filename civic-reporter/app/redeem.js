import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";
import Card from "@/components/Card";
import { Stack } from "expo-router"; 

export default function Redeem() {
  const userPoints = 120; 

  const handleRedeem = (reward) => {
    Alert.alert("Redeemed!", `You redeemed: ${reward}`);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: `My Rewards • ${userPoints} Points`,
          headerShown: true,
          headerStyle: { backgroundColor: Colors.background },
          headerTintColor: Colors.text,
        }}
      />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.header}>Redeem Your Points</Text>
        <Text style={styles.subHeader}>Available Points: {userPoints}</Text>

        
        <Text style={styles.sectionHeader}>🎁 Coupons & Discounts</Text>
        <Card style={styles.rewardCard}>
          <Text style={styles.rewardText}>₹100 Food Delivery Coupon (100 pts)</Text>
          <TouchableOpacity style={styles.redeemBtn} onPress={() => handleRedeem("Food Coupon")}>
            <Text style={styles.redeemText}>Redeem</Text>
          </TouchableOpacity>
        </Card>

        <Card style={styles.rewardCard}>
          <Text style={styles.rewardText}>20% Off Public Transport Pass (80 pts)</Text>
          <TouchableOpacity style={styles.redeemBtn} onPress={() => handleRedeem("Transport Pass")}>
            <Text style={styles.redeemText}>Redeem</Text>
          </TouchableOpacity>
        </Card>

        <Text style={styles.sectionHeader}>🎯 Contests & Raffles</Text>
        <Card style={styles.rewardCard}>
          <Text style={styles.rewardText}>Entry into City Cleanliness Raffle (50 pts)</Text>
          <TouchableOpacity style={styles.redeemBtn} onPress={() => handleRedeem("Raffle Entry")}>
            <Text style={styles.redeemText}>Redeem</Text>
          </TouchableOpacity>
        </Card>

        <Text style={styles.sectionHeader}>📜 Certificates</Text>
        <Card style={styles.rewardCard}>
          <Text style={styles.rewardText}>Municipality Recognition Certificate (150 pts)</Text>
          <TouchableOpacity style={styles.redeemBtn} onPress={() => handleRedeem("Certificate")}>
            <Text style={styles.redeemText}>Redeem</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
    marginTop: 10,
  },
  header: {
    fontSize: 22,
    fontFamily: Fonts.semiBold,
    marginBottom: 4,
    color: Colors.text,
  },
  subHeader: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginBottom: 20,
    color: Colors.muted,
  },
  sectionHeader: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    marginTop: 20,
    marginBottom: 10,
    color: Colors.text,
  },
  rewardCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  rewardText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    flex: 1,
    marginRight: 10,
  },
  redeemBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  redeemText: {
    color: Colors.textOnPrimary || "#fff",
    fontSize: 13,
    fontFamily: Fonts.medium,
  },
});
