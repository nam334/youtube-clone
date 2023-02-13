import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: 'comment',
    initialState:{
        loading:true, 
        comments:null  
    },
    reducers:{
        fetchComment:(state, action)=>{

            state.loading = false
            state.comments = action.payload
        },
        addComment:(state, action)=> {
            console.log(action.payload)
        }
    }
})

export const {fetchComment, addComment} = commentSlice.actions 
export default commentSlice.reducer  