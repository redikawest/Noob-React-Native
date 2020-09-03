import React,{Component} from 'react';
import {Text, View, TextInput, Image, StyleSheet, StatusBar, ScrollView} from 'react-native';
import gambar from './gambar.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';


function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle="dark-content">
        <SafeAreaView>
          <ScrollView>
            <Text>Hello World</Text>
          </ScrollView>
        </SafeAreaView>
      </StatusBar>
    </NavigationContainer>
  )
};

export default App;