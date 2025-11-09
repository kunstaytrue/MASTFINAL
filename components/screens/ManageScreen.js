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


