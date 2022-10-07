import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { UserState } from "../redux/stroje";
import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SettingsScreen from "../screens/SettingsScreen";

const AuthStack = createNativeStackNavigator();
const AuthStackContainer = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name='LoginScreen' component={LoginScreen} />
            <AuthStack.Screen name='RegisterScreen' component={RegisterScreen} />
        </AuthStack.Navigator>
    )
}


const AppStack = createNativeStackNavigator();
const AppStackContainer = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name='HomeScreen' component={Home} />
            <AppStack.Screen name='SettingsScreen' component={SettingsScreen} />
        </AppStack.Navigator>

    )
}

export default function AppNavigation() {
    const user = useSelector<UserState>(state => state.userSlice.user.email)
    if (user == null) {
        return (
            <AuthStackContainer />
        )
    }
    else {
        return (
            <AppStackContainer />
        )
    }

}