import { categoryGetAllFail, categoryGetAllRequest, categoryGetAllSuccess, categoryPostFail, categoryPostRequest, categoryPostSuccess } from "../slices/categorySlice";




let URL = "http://localhost:7890/api";


const categoryPost = (credential)=>async(dispatch)=>{
try {
    dispatch(categoryPostRequest());
    const {name,photo}= credential;
    const res = await fetch(`${URL}/category/create`,{
        method:"POST",
        body:JSON.stringify(credential),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data = await res.json();
    console.log(data);
    if(res.ok){
        dispatch(categoryPostSuccess(data));
    }
    else{
        dispatch(categoryPostFail(data.message))

    }

} catch (error) {
    dispatch(categoryPostFail(error.message))
}
}

const categoryGetAll = ()=>async(dispatch)=>{
    try {
        dispatch(categoryGetAllRequest());
        const res = await fetch(`${URL}/category/getall`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(categoryGetAllSuccess(data));
        }
        else{
            dispatch(categoryGetAllFail(data.message))
        }
    } catch (error) {
        dispatch(categoryGetAllFail(error.message))

    }
}