import React,{useEffect,useState} from 'react';
import {Text,View,StyleSheet,Image,FlatList, SectionList, TouchableOpacity,SafeAreaView,Platform,ScrollView,TextInput,ActivityIndicator,StatusBar} from "react-native"
import HeaderPage  from "../Header/Header"
import QuestionHome from "./Question"
import {useSelector,useDispatch} from "react-redux"
import {QuestionStack,SearchStack} from "../../Reducer/QuestionReducer"
import { useNavigation } from '@react-navigation/native';
import SearchBoxPage from "./SearchBox"
const Question = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [loading,setloading]=useState(false)
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const dispatch = useDispatch()
   
    console.log("search",search)

    const {question_stack}=useSelector((state)=>state.question)
    const data = question_stack ? question_stack.data:[]
    const items=data ? data.items:[]

   

    useEffect(()=>{
        dispatch(QuestionStack())
    },[])

    useEffect(()=>{
        setloading(true);
        setTimeout(()=>{
            setloading(false);
        },2000)
    },[])
    
    const renderStack=((item)=>{
        const {tags,title,owner,view_count,question_id,score,accepted_answer_id,link}=item
       
        return (
            <View>
                <QuestionHome view_count={view_count} score={score} tags={tags} title={title} owner={owner.display_name} link={link}
                navigation={navigation}
                question_id ={question_id}/>
                
            </View>
        )
    })

    return (
       <SafeAreaView  style={{flex:1}}>
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
                  <View>
                  <SearchBoxPage navigation={navigation} />
                  </View>

                  { loading ? (
               <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
               <ActivityIndicator size="large" color="black" />
               </View>
             
          
              
             
          ):(

                  
                  <View style={{}}>
                      <FlatList
                      data={items}
                      renderItem={({item}) =>{
                          return renderStack (item)
                      }}
                      keyExtractor={item=>{item.id}}

                      
                      />
                      
                  </View>
          )}
         
       </SafeAreaView>
    )
}

export default Question

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
