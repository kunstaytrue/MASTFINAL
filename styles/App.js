import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuProvider } from "./context/MenuContext";

import HomeScreen from "./screens/HomeScreen";
import ManageScreen from "./screens/ManageScreen";
import FilterScreen from "./screens/FilterScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Manage" component={ManageScreen} />
          <Stack.Screen name="Filter" component={FilterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
