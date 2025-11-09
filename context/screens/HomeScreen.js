import React from "react";
import { SafeAreaView, Text, View, FlatList, Button, Image } from "react-native";
import { useMenu } from "../context/MenuContext";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  const { menu } = useMenu();


