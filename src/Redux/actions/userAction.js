import { forgetPasswordFail, forgetPasswordRequest, forgetPasswordSuccess, loginFail, loginRequest, loginSuccess, otpFail, otpRequest, otpSuccess, resetPasswordFail, resetPasswordRequest, resetPasswordSuccess, signupFail, signupRequest, signupSuccess } from "../slices/userSlice"
import { URL } from "../../server";




const login = (credentials)=>async(dispatch)=>{
   
    try {
        dispatch(loginRequest());
        const {email,password}=credentials;
        const res = await fetch(`${URL}/user/login`,{
            method:"POST",
            body:JSON.stringify(credentials),
            headers:{
                "Contert-Type":"application/json"
            }
        })
        const data = await res.json();
        if(res.ok){
            dispatch(loginSuccess(data));
            localStorage.setItem("id",data.id);
            localStorage.setItem("token",data.token)
        }else{
            dispatch(loginFail(data.message));
        }
    } catch (error) {
        dispatch(loginFail(error.message));
    }
}

const register = (credentials)=>async(dispatch)=>{
    try {
        dispatch(signupRequest());
        const {email,password,username} = credentials;
        const res = await fetch(`${URL}/user/register`,{
            method:"POST",
            body:JSON.stringify(credentials),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        if(res.ok){
            dispatch(signupSuccess(data)); 
        } 
        else{
            dispatch(signupFail(data.message))
        }     
    } catch (error) {
        dispatch(signupFail(error.message))
    }
}

const verifyOtp = (credentials)=>async(dispatch)=>{
    try {
        dispatch(otpRequest());
        const {otp}=credentials;
        const res = await fetch(`${URL}/verify-otp`,{
            method:"POST",
            body:JSON.stringify(credentials),
            headers:{
                "Content-Type":"application/json"
            }

        })
        const data = await res.json();
        if(res.ok){
            dispatch(otpSuccess(data));
        }
        else{
            dispatch(otpFail(data.message));
        }
    } catch (error) {
        dispatch(otpFail(error.message));
    }
}

const forget = (credentials)=>async(dispatch)=>{
    try {
        dispatch(forgetPasswordRequest());
        const {email}= credentials;
        const res = await fetch(`${URL}/user/forget`,{
            method:"POST",
            body:JSON.stringify(credentials),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        if(res.ok){
            dispatch(forgetPasswordSuccess(data));
        }
        else{
            dispatch(forgetPasswordFail(data.message));
        }
    } catch (error) {
        dispatch(forgetPasswordFail(error.message))
    }
}
const reset = (credentials,userData)=>async(dispatch)=>{
    try {
        dispatch(resetPasswordRequest());
        const {password}=credentials;
        const {id,token}=userData;
        const res = await fetch(`${URL}/user/reset/${id}/${token}`,{
            method:"PUT",
            body:JSON.stringify(credentials),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        if(res.ok){
            dispatch(resetPasswordSuccess(data));
        }
        else{
            dispatch(resetPasswordFail(data.message));
        }
    } catch (error) {
        dispatch(resetPasswordFail(error.message));
    }
}
