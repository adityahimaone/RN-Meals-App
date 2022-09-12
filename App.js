import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Colors from "./constants/colors";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.secondary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          sceneContainerStyle: { backgroundColor: Colors.tertiary },
          drawerActiveBackgroundColor: Colors.tertiary,
          drawerActiveTintColor: Colors.primary,
          drawerInactiveTintColor: Colors.quaternary,
          drawerContentStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: "Favorites List",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="md-bookmark" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.secondary },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            contentStyle: { backgroundColor: Colors.tertiary },
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "Meal Detail",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
