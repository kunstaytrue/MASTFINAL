import React from "react";
import { SafeAreaView, View, Text, FlatList, Image } from "react-native";
import { useMenu } from "../context/MenuContext";
import styles from "../styles/styles";

export default function HomeScreen() {
  const { menu } = useMenu();

  const getAveragePrice = (courseName) => {
    const courseItems = menu.filter(
      (item) => item.course.toLowerCase() === courseName.toLowerCase()
    );
    if (courseItems.length === 0) return 0;
    const total = courseItems.reduce((sum, item) => sum + item.price, 0);
    return (total / courseItems.length).toFixed(2);
  };

  const totalItems = menu.length;
  const avgStarters = getAveragePrice("Starters");
  const avgMains = getAveragePrice("Mains");
  const avgDesserts = getAveragePrice("Dessert");

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ Logo */}
      <Image
        source={{
          uri: "https://img.icons8.com/color/100/restaurant.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.title}>Chef’s Menu Overview</Text>
      <Text style={styles.sub}>Total items: {totalItems}</Text>

      <View style={styles.statsBox}>
        <Text style={styles.sectionTitle}>Average Prices by Course</Text>
        <Text style={styles.statText}>Starters: R {avgStarters}</Text>
        <Text style={styles.statText}>Mains: R {avgMains}</Text>
        <Text style={styles.statText}>Desserts: R {avgDesserts}</Text>
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Full Menu</Text>

      {menu.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          No dishes added yet.
        </Text>
      ) : (
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
      )}
    </SafeAreaView>
  );
}
