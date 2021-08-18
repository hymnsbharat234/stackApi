import React,{useEffect,useState} from 'react'
import axios from 'axios'
import HeaderPage from "../Header/Header"
import { SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native'
import {useSelector,useDispatch} from "react-redux"
import {AnswerStack} from "../../Reducer/QuestionReducer"
const AnswerPage = ({route}) => {
    const {question_id,link,title}=route.params

    const dispatch=useDispatch()

    
   
    return (
       <SafeAreaView>
           <StatusBar barStyle = "dark-content" 
                  backgroundColor = "#fff" />
                  <HeaderPage/>
                  <View style={styles.d1}>
                      <View style={{marginHorizontal:50,  flexDirection:"row",alignItems: "center",
        justifyContent:"space-between",marginTop:10}}>
                      <Text style={styles.text1}>Question</Text>
                      <Text style={styles.text1}>Jobs</Text>
                      <Text style={styles.text1}>Tags</Text>
                      <Text style={styles.text1}>User</Text>
                      <Text style={styles.text1}>Badges</Text>
                      <Text style={styles.text1}>Ask</Text>
                      </View>
                  </View>
                  <View style={{marginTop:10,marginHorizontal:5}}>
                    <Text style={{fontSize:18}}>{title}</Text>
                  </View>
                  <View style={{marginTop:10,marginHorizontal:10}}>
                    <Text>{link}</Text>
                  </View>



       </SafeAreaView>
    )
}

export default AnswerPage

const styles = StyleSheet.create({
  d1:{
    backgroundColor:"#fff",
    
    height:45,
  
    
},
text1:{
    color:"#9e9e9e",
    fontWeight:"600"
}
})
