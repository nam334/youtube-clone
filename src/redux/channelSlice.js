import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
    name:'channel',
    initialState:{
        loading:true,
        channelDetails:null
    },
    reducers:{
        getChannelDetails:(state, action) => {
           
            state.channelDetails = action.payload 
            state.loading = false 
        }
    }
})

export const {getChannelDetails} = channelSlice.actions 
export default channelSlice.reducer