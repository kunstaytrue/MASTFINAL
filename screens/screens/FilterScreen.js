import React, { useState } from "react";
import { SafeAreaView, Text, FlatList, View, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useMenu } from "../context/MenuContext";
import styles from "../styles/styles";

export default function FilterScreen({ navigation }) {
  const { menu } = useMenu();
  const [course, setCourse] = useState("Starters");

  const filtered = menu.filter((item) => item.course === course);

  