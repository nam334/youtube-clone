import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'video',
    initialState:{
        videos:"",
        loading:true,
        nextPageToken:"",
        activeCategory:"All"
    }, 
    reducers:{
        getVideo:(state, action)=>{
          
            state.videos = state.activeCategory === action.payload.activeCategory ? [...state.videos, ...action.payload.dataRes]: action.payload.dataRes
            state.nextPageToken = action.payload.nextPageToken
            state.loading = false
        },
        getVideoByCategory:(state, action)=>{
          
            state.videos = state.activeCategory === action.payload.activeCategory ? [...state.videos, ...action.payload.items]: action.payload.items
            // state.videos = action.payload.items
            state.activeCategory = action.payload.value
            state.loading = false

        }
    }
})

export const {getVideo, getVideoByCategory} = videoSlice.actions 
export default videoSlice.reducer