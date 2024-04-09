import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import { PokemonListScreen } from "../screens/PokemonListScreen";
import FavoritePokemons from "../components/Favorites/FavoritePokemons";
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import DeleteAccountScreen from "../screens/Delete/DeleteAccountScreen";
import { addFavoritePokemon, removeFavoritePokemon } from "../services/favoriteService";
import { Pokemon } from '../interfaces/Pokemon';

const Stack = createStackNavigator();

export default function AppNavigator() {
    const handleAddFavorite = (pokemon: Pokemon) => {
        addFavoritePokemon(pokemon);
    };

    const handleRemoveFavorite = (pokemon: Pokemon) => {
        removeFavoritePokemon(pokemon);
    };

    return (
        <Stack.Navigator>
            {/* Defina a tela de login como a tela inicial */}
            <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{ headerShown: false }} />
            {/* Inclua outras telas, como a tela de registro */}
            <Stack.Screen 
                name="Register" 
                component={RegisterScreen}
                options={{ headerTitle: "Registrar" }} />
            {/* Inclua a tela de exclusão de conta */}
            <Stack.Screen 
                name="DeleteAccount" 
                component={DeleteAccountScreen}
                options={{ headerTitle: "Excluir Conta" }} />
            {/* Inclua a tela de lista de pokémons */}
            <Stack.Screen 
                name="PokemonList" 
                component={PokemonListScreen}
                options={({ navigation }) => ({
                    headerTitle: "Todos os Pokémons",
                    headerRight: () => (
                        <IconButton
                            icon="star"
                            onPress={() => navigation.navigate("FavoritePokemons")} 
                        />
                    ),
                })} />
            {/* Inclua a tela de pokémons favoritos */}
            <Stack.Screen 
                name="FavoritePokemons" 
                component={FavoritePokemons}
                options={{ headerTitle: "Pokémons Favoritos" }} />
        </Stack.Navigator>
    );
}
