import React, { useState } from "react";
import {SafeAreaView,View,Text,TextInput,Button,FlatList,Alert,TouchableWithoutFeedback,Keyboard,ScrollView,
        KeyboardAvoidingView,Platform,} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useMenu } from "../context/MenuContext";
import styles from "../styles/styles";

export default function ManageScreen({ navigation }) {
  const { menu, addItem, removeItem } = useMenu();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState("Starters");

  const handleAdd = () => {
    if (name.trim() === "" || description.trim() === "" || price.trim() === "") {
      Alert.alert("Error", "All fields must be filled in!");
      return;
    }

    addItem({ name, description, course, price: Number(price) });
    setName("");
    setDescription("");
    setPrice("");
    setCourse("Starters");
    Keyboard.dismiss(); 
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ paddingBottom: 80 }}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.title}>Manage Menu</Text>

            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              value={name}
              onChangeText={setName}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />

            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Dish Description"
              value={description}
              onChangeText={setDescription}
              multiline
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />

            <TextInput
              style={styles.input}
              placeholder="Price"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
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

       
            <View style={{ alignItems: "center", marginVertical: 10 }}>
              <View style={{ width: "50%" }}>
                <Button title="Add Dish" onPress={handleAdd} />
              </View>
            </View>

            <Text style={styles.sub}>Current Menu</Text>
            <FlatList
              data={menu}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.rowCard}>
                  <Text>
                    {item.name} • {item.course} • R {item.price}
                  </Text>
                  <Button title="Delete" onPress={() => removeItem(item.id)} />
                </View>
              )}
            />

            <View style={{ marginVertical: 20 }}>
              <Button title="Go to Filter" onPress={() => navigation.navigate("Filter")} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
