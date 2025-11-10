import React from "react";
import { SafeAreaView, View, Text, FlatList, Image, Button } from "react-native";
import { useMenu } from "../context/MenuContext";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  const { menu } = useMenu();

  // Function to calculate average price by course
  const getAveragePrice = (course) => {
    const filtered = menu.filter(
      (item) => item.course.toLowerCase() === course.toLowerCase()
    );
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, item) => sum + item.price, 0);
    return (total / filtered.length).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://img.icons8.com/color/100/restaurant.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.title}>Menu</Text>
      <Text style={styles.sub}>Total items: {menu.length}</Text>

      <View style={styles.statsBox}>
        <Text style={styles.sectionTitle}>Average Prices by Course</Text>
        <Text style={styles.statText}>Starters: R {getAveragePrice("Starters")}</Text>
        <Text style={styles.statText}>Mains: R {getAveragePrice("Mains")}</Text>
        <Text style={styles.statText}>Dessert: R {getAveragePrice("Dessert")}</Text>
      </View>

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
