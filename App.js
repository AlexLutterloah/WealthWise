import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Assets from './components/Assets';
import Liabilities from './components/Liabilities';
import Login from './components/Login';
import { DataProvider }  from './components/DataProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Liabilities" component={Liabilities} options={{ headerShown: false }} />
          <Stack.Screen name="Assets" component={Assets} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}