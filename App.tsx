import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SettingsScreen from './src/screens/SettingsScreen';
const AppStack = createNativeStackNavigator();
const AppStackContainer = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown:false}}>
      <AppStack.Screen name='HomeScreen' component={Home} />
      <AppStack.Screen name='SettingsScreen' component={SettingsScreen} />
    </AppStack.Navigator>

  )
}
export default function App() {
  return (
    <NavigationContainer>
      <AppStackContainer />
    </NavigationContainer>
  );
}

