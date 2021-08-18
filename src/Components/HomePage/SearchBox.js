import React,{useEffect,useState} from 'react'
import { StyleSheet,FlatList, Text, View,SafeAreaView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native'
import {SearchStack} from "../../Reducer/QuestionReducer"
import { useDispatch,useSelector } from 'react-redux'
import { useForm,Controller } from 'react-hook-form';
import QuestionSearch from "./Question"
const SearchBox = ({navigation}) => {

 
    const dispatch =useDispatch()
      const [loading,setloading]=useState(false)
    const {search_stack}=useSelector((state)=>state.question)
    const data = search_stack ? search_stack.data:[]
    const items=data ? data.items:[]
     
    const {control,handleSubmit,reset,formState: { errors }} =useForm({
        defaultValue:{
            intitle:""
         
        }
    });


    const Search=(data)=>{
        dispatch(SearchStack(data))
        console.log(data,"data")
        
    }
  

    const rendersearch=((item)=>{
        const {tags,title,owner,view_count,score,accepted_answer_id,link}=item
        return(
            <QuestionSearch view_count={view_count} score={score} tags={tags} title={title} owner={owner.display_name}
            navigation={navigation}
            id={accepted_answer_id} link={link}/>


        )
    })
    // useEffect(()=>{
    //     setloading(true);
    //     setTimeout(()=>{
    //         setloading(false);
    //     },2000)
    // },[])


  

    return (
        <SafeAreaView style={{}}>
            <View style={{height:40,
                    borderBottomWidth:1,borderTopWidth:1,borderBottomColor:"#bdbdbd",borderTopColor:"#bdbdbd",
                    backgroundColor:"#e0e0e0"}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10,marginTop:10}}>
                    <Controller
            control={control}
            render={({field:{onChange, onBlur, value }})=>(
                        <TextInput
                        
                        value={value}
                        onChangeText={value => onChange(value)}
                        style={{borderWidth:1,width:"80%",
                        marginTop:-5,borderColor:"#0d5db9",
                        height:30,backgroundColor:"#fff",paddingLeft:5,fontSize:13,fontWeight:"500"}}
                        placeholder="Search Q&A"
                        />
                        )}
                        name="intitle"
                        rules={{required:true}}
                        />
                         {errors.intitle && <Text>This is required.</Text>}
                        <TouchableOpacity
                        style={{backgroundColor:"#286da9",width:54,borderRadius:5}}
                        onPress={handleSubmit(Search)}>
                        <Text style={{color:"#fff",textAlign:"center", fontWeight:"600"}}>Search</Text>
                        </TouchableOpacity>
                        

                    </View>

                  </View>
                  
                  { loading ? (
               <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
               <ActivityIndicator size="large" color="black" />
               </View>
             
          
              
             
          ):(

                  <FlatList
                      data={items}
                      renderItem={({item}) =>{
                          return rendersearch (item)
                      }}
                      keyExtractor={item=>{item.id}}

                      
                      />
          )}
          
        </SafeAreaView>
    )
}

export default SearchBox

const styles = StyleSheet.create({})
