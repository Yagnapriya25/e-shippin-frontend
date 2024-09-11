import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo:null,
    loading:true,
    error:null,
    otpSent:false,
    passwordResetSuccess:false

}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        
    }
})