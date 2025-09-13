import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "@/components/Card"; 
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";


const notifications = [
  { id: "1", message: "Your report was assigned to Road Dept.", time: "1 hr ago" },
  { id: "2", message: "Streetlight issue marked as Resolved.", time: "Yesterday" },
];

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </Card>
        )}
      />
    </View>
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
  card: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: Colors.surface,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  message: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  time: {
    fontSize: 12,
    color: Colors.muted,
    marginTop: 4,
    fontFamily: Fonts.regular,
  },
});
