import { configureStore } from '@reduxjs/toolkit'
import channelSlice from './channelSlice'
import chatSlice from './chatSlice'
import commentSlice from './commentSlice'
import loginSlice from './loginSlice'
import selectedvideoSlice from './selectedvideoSlice'
import videoSlice from './videoSlice'
export const store = configureStore({
    reducer:{
        login:loginSlice,
        video:videoSlice,
        selectedVideo: selectedvideoSlice,
        channel:channelSlice,
        comment: commentSlice,
        chat:chatSlice
    },
   
})