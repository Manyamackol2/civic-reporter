import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/typography';
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/login"); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
       
        <View style={styles.header}>
          <Image
            source={{ uri: "https://via.placeholder.com/112" }} 
            style={styles.avatar}
          />
          <Text style={styles.name}>Jane Doe</Text>
          <Text style={styles.email}>janedoe@example.com</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="person-circle-outline" size={22} color={Colors.primary} />
            <Text style={styles.cardText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Ionicons name="settings-outline" size={22} color={Colors.primary} />
            <Text style={styles.cardText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Ionicons name="help-circle-outline" size={22} color={Colors.primary} />
            <Text style={styles.cardText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={22} color={Colors.error} />
            <Text style={[styles.cardText, { color: Colors.error }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  container: { flex: 1, padding: 20 },
  header: { alignItems: "center", marginTop: 40, marginBottom: 30 },
  avatar: { width: 112, height: 112, borderRadius: 56, marginBottom: 12, borderWidth: 4, borderColor: Colors.primary },
  name: { fontSize: 24, fontFamily: Fonts.semiBold, color: Colors.primary },
  email: { fontSize: 14, fontFamily: Fonts.regular, color: Colors.muted, marginBottom: 16 },
  actions: { flex: 1, justifyContent: "flex-start", gap: 12 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    marginBottom: 12,
  },
  cardText: { fontSize: 16, fontFamily: Fonts.medium, color: Colors.primary, marginLeft: 12 },
});
