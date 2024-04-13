import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {Home} from "../screens/home";
import { PokemonListScreen } from "../screens/PokemonListScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ headerShown: false }} />
            <Stack.Screen 
                name="PokemonList" 
                component={PokemonListScreen}
                options={{ headerTitle: "Todos os Pokémons" }} />
        </Stack.Navigator>
    );
}
 