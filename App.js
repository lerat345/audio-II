import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SignUP from './components/signup'
import Login from './components/login'
import Camera from './components/camera'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



    
  

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Signup" component={SignUP} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="camera" component={Camera} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 export default App;