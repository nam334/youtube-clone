import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        chatData:["Namrata: This is the first comment!"],
        loading:true 
    },
    reducers:{
        addChat:(state, action) => {
           
            state.chatData.splice(10,1)
            state.chatData.unshift(action.payload)
            state.loading = false
        }
    }
})

export const {addChat} = chatSlice.actions 
export default chatSlice.reducer