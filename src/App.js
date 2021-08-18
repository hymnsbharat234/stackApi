import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import NavigationPa from "./Components/NavigationPage"
import {checkConnected} from "../src/NetInfo"
import NoConnectionScreen from "../src/Components/HomePage/NoConnection"
export default function App() {
const [connect,setConnect]=useState(false)

checkConnected().then(res=>{
  setConnect(res)
})

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {connect ? (
     <NavigationPa/>):(
       <NoConnectionScreen/>
     )}

      </NavigationContainer>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
