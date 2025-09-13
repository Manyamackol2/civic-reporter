import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "@/components/Card";
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";
import { Stack } from "expo-router";

export default function Badges() {
  return (
    <>
      
      <Stack.Screen
        options={{
          title: "My Badges",
          headerShown: true,
          headerStyle: { backgroundColor: Colors.background },
          headerTintColor: Colors.text,
        }}
      />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
       
        <Text style={styles.sectionHeader}>Unlocked</Text>
        <View style={styles.badges}>
          <Card style={styles.badgeCard}><Text style={styles.badgeText}>🏆 Civic Hero</Text></Card>
          <Card style={styles.badgeCard}><Text style={styles.badgeText}>🌱 Eco Guardian</Text></Card>
        </View>

       
        <Text style={styles.sectionHeader}>Locked</Text>
        <View style={styles.badges}>
          <Card style={[styles.badgeCard, styles.locked]}>
            <Text style={styles.badgeText}>🔒 Road Safety Hero</Text>
          </Card>
          <Card style={[styles.badgeCard, styles.locked]}>
            <Text style={styles.badgeText}>🔒 Clean City Champion</Text>
          </Card>
        </View>
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
  sectionHeader: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    marginVertical: 10,
    color: Colors.text,
  },
  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
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
    minWidth: 130,
    marginRight: 12,
    marginBottom: 12,
  },
  locked: {
    opacity: 0.5,
  },
  badgeText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.text,
  },
});
