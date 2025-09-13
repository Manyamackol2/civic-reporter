import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "@/components/Button"; 
import Chip from "@/components/Chip";     
import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/typography";

const categories = ["Road", "Electricity", "Water", "Waste"];

export default function NewReport() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Report</Text>

      
      <Text style={styles.label}>Upload Photo</Text>
      <Button title="Upload Photo (Placeholder)" onPress={() => {}} />

      
      <Text style={styles.label}>Category</Text>
      <View style={styles.chips}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            selected={selectedCategory === cat}
            onPress={() => setSelectedCategory(cat)}
          />
        ))}
      </View>

      
      <Text style={styles.label}>Location (GPS Auto-tag)</Text>
      <View style={styles.mapPlaceholder}>
        <Text style={{ color: Colors.muted }}>📍 MG Road, Bengaluru</Text>
      </View>

    
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe the issue..."
        placeholderTextColor={Colors.muted}
        multiline
        value={description}
        onChangeText={setDescription}
      />

    
      <Button title="Submit Report" onPress={() => {}} />
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
    marginBottom: 16,
    color: Colors.text,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    marginTop: 16,
    marginBottom: 6,
    color: Colors.text,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8, 
  },
  mapPlaceholder: {
    height: 120,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 12,
    minHeight: 100,
    textAlignVertical: "top",
    marginBottom: 20,
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
});
