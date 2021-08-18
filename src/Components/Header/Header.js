import React from 'react'
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
const Header = () => {
    return (
        <SafeAreaView >
        <View style={{height:40,backgroundColor:"black",borderBottomWidth:1}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row"}}>
                <Image 
                style={{height:35,width:50,marginLeft:10,marginTop:2,resizeMode:"contain"}}
                source={require("../../../assets/s2.png")}/>
                <Text style={{marginLeft:-2,marginTop:10,color:"#fff",fontWeight:"600"}}>Stack Overflow</Text>
               </View>
                <View style={{flexDirection:"row",marginRight:15,marginTop:10}}>
                    <Icon name="trophy" size={22} color="#bdbdbd" style={{marginRight:13}} />
                    <Icon name="inbox" size={22} color="#bdbdbd"/>



                </View>
            </View>
            
        </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({})
