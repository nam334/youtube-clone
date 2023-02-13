import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name:"app",
    initialState:{
        userData: [sessionStorage.getItem('ytc-user') ? JSON.parse(sessionStorage.getItem('ytc-user')) : null ]
    },
    reducers:{
       userProfile:(state, action) => {
            //state.userData.push(action.payload)
            state = state.userData.splice(0,1,action.payload)
       },
       logoutProfile:(state) => {
        state.userData = []
       }
    }
})

export const {loginSuccess, userProfile, logoutProfile} = loginSlice.actions 
export default loginSlice.reducer 