import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AuthenticatingScreen from './screens/AuthenticatingScreen';
import SuccessScreen from './screens/SuccessScreen';
import PasoScreen from './screens/PasoScreen';
import DashboardScreen from './screens/DashboardScreen';
import ReportesXUsuario from './screens/ReportesXUsuario';
import ReproduccionLavados from './screens/ReproduccionLavados';
import ABMUsuarios from './screens/ABMUsuarios';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Authenticating" component={AuthenticatingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Success" component={SuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Paso" component={PasoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ReportesXUsuario" component={ReportesXUsuario} options={{ headerShown: false }}/>
        <Stack.Screen name="ReproduccionLavados" component={ReproduccionLavados} options={{ headerShown: false }}/>
     {/*   <Stack.Screen name="ABMUsuarios" component={ABMUsuarios} options={{ headerShown: false }}/>  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}