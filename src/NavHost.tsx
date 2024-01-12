import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "./WelcomeScreen.tsx";
import {Routes} from "./util/Routes.tsx";

const Stack = createNativeStackNavigator();

const App = () : JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.SplashScreen}>
                <Stack.Screen name={Routes.SplashScreen} component={WelcomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;