import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import HomePage from "./HomePage/index"
import QuestionPage from "./HomePage/Question"
import AnswerPage from "./HomePage/AnswerPage"
const RootStack=createStackNavigator();
const NavigationPage = ({navigation}) => {
    return (
        <>
          <RootStack.Navigator headerMode="none">
             <RootStack.Screen component ={HomePage} name="HomePage"/>
             {/* <RootStack.Screen component ={QuestionPage} name="QuestionPage"/> */}
             <RootStack.Screen component ={AnswerPage} name="AnswerPage"/>
          </RootStack.Navigator>
        </>
    )
}

export default NavigationPage

const styles = StyleSheet.create({})
