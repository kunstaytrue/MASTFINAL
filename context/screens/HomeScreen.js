import React from "react";
import { SafeAreaView, View, Text, FlatList, Image, Button } from "react-native";
import { useMenu } from "../context/MenuContext";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  const { menu } = useMenu();

  const averagePrice =
    menu.length > 0
      ? (menu.reduce((sum, item) => sum + item.price, 0) / menu.length).toFixed(2)
      : 0;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: "https://img.icons8.com/color/100/restaurant.png" }}
        style={styles.logo}
      />

      <Text style={styles.title}>Menu</Text>
      <Text style={styles.sub}>Total items: {menu.length}</Text>
      <Text style={styles.sub}>Average price: R {averagePrice}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dish}>{item.name}</Text>
            {item.description ? (
              <Text style={styles.desc}>{item.description}</Text>
            ) : null}
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.price}>R {item.price}</Text>
          </View>
        )}
      />

      <View style={styles.row}>
        <Button title="Manage Menu" onPress={() => navigation.navigate("Manage")} />
        <Button title="Filter Menu" onPress={() => navigation.navigate("Filter")} />
      </View>
    </SafeAreaView>
  );
}
