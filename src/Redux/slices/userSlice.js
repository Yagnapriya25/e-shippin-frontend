import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    loading: true,
    error: null,
    otpSent: false,
    passwordResetSuccess: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Login
        loginRequest(state) {
            state.loading = true;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.userInfo = action.payload;
        },
        loginFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        // Signup
        signupRequest(state) {
            state.loading = true;
        },
        signupSuccess(state, action) {
            state.loading = false;
            state.userInfo = action.payload;
        },
        signupFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        // OTP
        otpRequest(state) {
            state.loading = true;
        },
        otpSuccess(state) {
            state.loading = false;
            state.otpSent = true;
        },
        otpFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        // Forgot Password
        forgetPasswordRequest(state) {
            state.loading = true;
        },
        forgetPasswordSuccess(state, action) {
            state.loading = false;
            state.otpSent = true; // OTP sent for resetting the password
        },
        forgetPasswordFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        // Reset Password
        resetPasswordRequest(state) {
            state.loading = true;
        },
        resetPasswordSuccess(state, action) {
            state.loading = false;
            state.passwordResetSuccess = true; // Password reset successfully
        },
        resetPasswordFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        // Logout
        logout(state) {
            state.userInfo = null;
        },

        // Delete User
        deleteUserRequest(state) {
            state.loading = true;
        },
        deleteUserSuccess(state) {
            state.loading = false;
            state.userInfo = null;
        },
        deleteUserFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        getUserRequest(state){
            state.loading=true;
        },
        getUser
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFail,
    signupRequest,
    signupSuccess,
    signupFail,
    otpRequest,
    otpSuccess,
    otpFail,
    forgetPasswordRequest,
    forgetPasswordSuccess,
    forgetPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail,
    logout,
    deleteUserRequest,
    deleteUserSuccess,
    deleteUserFail
} = userSlice.actions;

export default userSlice.reducer;
