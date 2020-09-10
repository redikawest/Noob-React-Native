import React,{Component} from 'react';
import {Text, View, TextInput, Image, StyleSheet, StatusBar, ScrollView, Dimensions, ImageBackground} from 'react-native';
import gambar from './gambar.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';

const win = Dimensions.get("window");
function App() {
  return(
    // <NavigationContainer>
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="transparent"  />
      <ImageBackground style={{width: win.width, height: win.height, position: "absolute",flexDirection:"column", alignItems:"center", justifyContent:"center"}} source={gambar}>
        <Text style={{backgroundColor:"red", paddingHorizontal: 16, paddingVertical:4, borderRadius: 10, color: "white"}} >Hello World</Text>
        <Text style={{backgroundColor:"red", paddingHorizontal: 16, paddingVertical:4, borderRadius: 10, color: "white", marginTop:10}} >hay kamu</Text>
      </ImageBackground>
    </View>
    // </NavigationContainer>
  )
};

export default App;