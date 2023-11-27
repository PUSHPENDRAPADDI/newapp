/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

const fruit = () =>{
  return "Apple"
}

const App = () => {

  let data = "sunny"
  return (
    <View>
      <Text style={{ fontSize: 30 }}>This is new {data} Appss</Text>
      <Text style={{ fontSize: 30 }}>This is new Native Appd</Text>
      <Text style={{ fontSize: 30 }}>This is {fruit()} Native Appd</Text>
      <Button title='Press Here'></Button>
    </View>
  );
}

export default App;