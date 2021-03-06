import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
import { SecondaryScreen } from "./SecondaryScreen";
import { ThemeProvider } from "../contexts/ThemeProvider";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
  <ThemeProvider>
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerShown: false,
        }}
      >
        <StackNavigator.Screen
          name="Home"
          component={HomeScreen}
        />
        <StackNavigator.Screen
          name="Secondary"
          component={SecondaryScreen}
        />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  </ThemeProvider>
);
