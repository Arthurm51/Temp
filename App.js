import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Dados from './src/pages/Dados';
import Sobre from './src/pages/Sobre';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#9c7c24',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >


        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              title: 'Menu',
            }
          }
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={
            { title: "Sobre" }
          }
        />
        <Stack.Screen
          name="Dados"
          component={Dados}
          options={
            { title: "Dados da cidade" }
          }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;