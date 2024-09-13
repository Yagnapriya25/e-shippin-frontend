import { loginFail, loginRequest, loginSuccess } from "../slices/userSlice"
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
        }else{
            dispatch(loginFail(data.message));
        }
    } catch (error) {
        dispatch(loginFail(error.message));
    }
}
