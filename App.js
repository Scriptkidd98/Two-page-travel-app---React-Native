import 'react-native-gesture-handler';
import React, {Component} from 'react';
import HomePage from './screens/HomePage';
import InfoPage from './screens/InfoPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
          <Stack.Screen name="Info" component={InfoPage}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App