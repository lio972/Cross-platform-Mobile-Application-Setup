import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import HomeScreen from '../screens/HomeScreen';
    import LoginScreen from '../screens/LoginScreen';
    import { useSelector } from 'react-redux';
    import { RootState } from '../store/store';

    const Stack = createNativeStackNavigator();

    export default function Navigation() {
      const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
      );

      return (
        <NavigationContainer>
          <Stack.Navigator>
            {isAuthenticated ? (
              <Stack.Screen name="Home" component={HomeScreen} />
            ) : (
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
