import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading: false,
}


export const QuestionStack = createAsyncThunk(
    "QuestionStack",
    async () => {

       
        const result=await axios.get("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow")
        console.log(result)
        return result
       
    }
)
export const SearchStack = createAsyncThunk(
    "SearchStack",
    async (body) => {
      
       
        const result=await axios.get(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${body.intitle}&site=stackoverflow`)
        console.log(result)
        return result
       
    }
)
export const AnswerStack = createAsyncThunk(
    "AnswerStack",
    async (body) => {
        console.log(body,"body")
       
        // const result=await axios.get(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${body.intitle}&site=stackoverflow`)
        // console.log(result)
        // return result
       
    }
)
const questionReducer=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:{
        [QuestionStack.fulfilled]:(state, { payload:question_stack})=>{
            if(question_stack.status){
                state.question_stack=question_stack
            }else{
                state.question_stack=question_stack
            }

        },
        [QuestionStack.pending]:(state, action)=>{
            state.loading=true

        },
        [SearchStack.fulfilled]:(state, { payload:search_stack})=>{
            if(search_stack.status){
                state.search_stack=search_stack
            }else{
                state.search_stack=search_stack
            }

        },
        [SearchStack.pending]:(state, action)=>{
            state.loading=true

        },
        // [AnswerStack.fulfilled]:(state, { payload:answer_stack})=>{
        //     if(answer_stack.status){
        //         state.answer_stack=answer_stack
        //     }else{
        //         state.answer_stack=answer_stack
        //     }

        // },
        // [AnswerStack.pending]:(state, action)=>{
        //     state.loading=true

        // },


    }

})
export default questionReducer.reducer