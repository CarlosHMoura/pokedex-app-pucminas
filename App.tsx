import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { PokemonProvider } from "./src/contexts/PokemonContext";

import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <PokemonProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PokemonProvider>
  );
}