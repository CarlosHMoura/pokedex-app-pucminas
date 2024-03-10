import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/home';
import { ThemeProvider } from "styled-components/native";
import THEME from "../pokedex-app-pucminas/src/theme";

export default function App() {
  return (
    <View>
      <Home></Home>
    </View>
  );

  return (
    <ThemeProvider theme={THEME}>
      <Home></Home>
    </ThemeProvider>
  );

}
