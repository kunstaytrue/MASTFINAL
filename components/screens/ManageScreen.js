import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, Button, FlatList, View, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useMenu } from "../context/MenuContext";
import styles from "../styles/styles";

export default function ManageScreen({ navigation }) {
  const { menu, addItem, removeItem } = useMenu();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState("Starters");

  const handleAdd = () => {
    if (name.trim() === "" || price.trim() === "") {
      Alert.alert("Error", "All fields must be filled in!");
      return;
    }
    addItem({ name, course, price: Number(price) });
    setName("");
    setPrice("");
    setCourse("Starters");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Manage Menu</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Picker
        selectedValue={course}
        style={styles.input}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Button title="Add Dish" onPress={handleAdd} />

      <Text style={styles.sub}>Current Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rowCard}>
            <Text>{item.name} • {item.course} • R {item.price}</Text>
            <Button title="Delete" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />

      <Button title="Go to Filter" onPress={() => navigation.navigate("Filter")} />
    </SafeAreaView>
  );
}
