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
        loginRequest(state){
          state.loading(true)
        },
        loginSuccess(action,state){
            state.loading=false;
            state.userInfo=action.payload;
        },
        loginFail(state,action){
            state.loading=false;
            state.error=action.payload;
        },
        //signup 
        signupRequest(state){
            state.loading = true;
        },
        signupSuccess(state,action){
            state.loading = false;
            state.userInfo = action.payload;
        },
        signupFail(state,action){
            state.loading = false;
            state.error = action.payload
        },
        otpRequest(state){
          state.loading = true
        },
        otpSuccess(state,action){
            state.loading=false;
            state.otpSent = false;
        },
        otpFail(state,action){
            state.loading =false;
            state.error = action.payload;
        },
        forgetPaswordRequest(state){
            state.loading = true
        },
        forgetPasswordSuccess(state,action){
            state.loading = false;
            state.userInfo = action.payload
        },
        forgetPasswordFail(state,action){
            state.loading = false;
            state.error = action.payload
        },
        resetPasswordRequest(state){
            state.loading = true
        },
        resetPasswordSuccess(state,action){
            state.loading = false;
            state.userInfo = action.payload;
        },
        resetPasswordFail(state,action){
            state.loading= false;
            state.error = action.payload;
        },
        logout(state){
            state.userInfo = null
        },
        deleteUserRequest(state){
            state.loading = true
        },
        deleteUserSuccess(state,action){
            state.loading = false;
            state.userInfo = null;
        },
        deleteUserFail(state,action){
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {loginRequest,loginSuccess,loginFail,signupRequest,signupSuccess,signupFail,otpRequest,otpSuccess,otpFail,forgetPaswordRequest,forgetPasswordSuccess,forgetPasswordFail,resetPasswordRequest,resetPasswordSuccess,resetPasswordFail,logout,deleteUserRequest,deleteUserSuccess,deleteUserFail} =userSlice.actions;

export default userSlice.reducer;