import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import Icons from "react-native-vector-icons/Ionicons"
const QuestionHome = (
    {tags,title,owner,view_count,score,question_id,navigation,link}) => {

    
    return (
       <SafeAreaView style={{flex:1}}>
           <View style={{flexDirection:"row",height:130,borderBottomWidth:1,borderBottomColor:"#9e9e9e"}}>
              <View style={{width:70,backgroundColor:"#eeeeee",alignItems:"center"}}>
                  <View style={{flexDirection:"row",marginTop:10}}>
                      <Text style={{color:"#757575"}}>{view_count}</Text>
                      <Icons
                      style={{marginLeft:5}}
                      name="triangle-outline" color="#757575" size={15}/>
                  </View>
                  <View style={{flexDirection:"row",marginTop:3}}>
                      <Text style={{color:"#757575"}}>{score}</Text>
                      <Icons
                      style={{marginLeft:5}}
                      name="chatbubble-outline" color="#757575" size={15}/>
                  </View>
                 
            </View> 
            <View style={{marginTop:5,marginHorizontal:10,width:"80%"}} >
                <TouchableOpacity onPress={()=> navigation.navigate("AnswerPage",{question_id:question_id,link:link,title:title,})}>
                <Text style={{fontWeight:"bold",color: "#0288d1"}}>{title}</Text>
                </TouchableOpacity>
                <View style={{}}>
                    <Text style={{marginTop:10,fontWeight:"600"}}>{tags.join(' , ')}</Text>
                </View>
                <Text  style={{fontWeight:"500",color: "#43a047",marginTop:6}}>{owner}</Text>

            </View>

           </View>
       </SafeAreaView>
    )
}

export default QuestionHome

const styles = StyleSheet.create({})
