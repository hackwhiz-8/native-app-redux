import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductWrapper from './Components/Redux/ProductWrapper';
import UserList from './Components/Redux/UserList';





const stack = createNativeStackNavigator();
function App(): React.JSX.Element {



  return (
    <NavigationContainer>

      <stack.Navigator>
          <stack.Screen   name='Home' component={ProductWrapper}/>
          <stack.Screen   name='User' component={UserList}/>
      </stack.Navigator>
    </NavigationContainer>


  );



}



export default App;




