// app/login.tsx
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CivicReporter</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue your civic journey.</Text>

        <TextInput placeholder="Email" placeholderTextColor={Colors.muted} style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor={Colors.muted} secureTextEntry style={styles.input} />

        <TouchableOpacity 
          style={styles.loginBtn} 
          onPress={() => router.replace("/(tabs)/home")}  
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
          <Text style={styles.register}>
            No account? <Text style={{ color: Colors.primary }}>Register</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
          <Text style={styles.guest}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    fontSize: 28,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
    marginBottom: 30,
  },
  card: {
    width: "100%",
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 16,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.semiBold,
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.muted,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.muted,
    borderRadius: 12,
    marginBottom: 12,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  loginBtn: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  register: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginTop: 14,
  },
  guest: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginTop: 8,
  },
});
