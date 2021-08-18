import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const NoConnection = () => {
    return (
        <View style={{alignItems:"center",justifyContent:"center",marginTop:30}}>
        <Image 
        style={{height:100,width:150}}
        source={require("../../../assets/s4.png")}/>
        </View>
    )
}

export default NoConnection

const styles = StyleSheet.create({})
