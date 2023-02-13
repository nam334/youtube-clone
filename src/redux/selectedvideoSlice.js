import { createSlice } from "@reduxjs/toolkit";

const selectedvideoSlice = createSlice({
    name:"selectedvideoSlice",
    initialState:{
        loading:true,
        video:null 
    },
    reducers:{
        addVideo:(state, action)=>{
          
            state.video = action.payload
            state.loading = false
        }
    }
})

export const {addVideo} = selectedvideoSlice.actions 
export default selectedvideoSlice.reducer