import React, { useState } from "react";
import { SafeAreaView, Text, FlatList, View, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useMenu } from "../context/MenuContext";
import styles from "../styles/styles";

export default function FilterScreen({ navigation }) {
  const { menu } = useMenu();
  const [course, setCourse] = useState("Starters");

  const filtered = menu.filter((item) => item.course === course);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>

      <Picker
        selectedValue={course}
        style={styles.input}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <FlatList
        data={filtered}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dish}>{item.name}</Text>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.price}>R {item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No items in {course}</Text>}
      />

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
}
