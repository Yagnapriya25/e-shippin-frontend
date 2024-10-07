import { cartDecreaseFail, cartDecreaseRequest, cartDecreaseSuccess, cartPostFail, cartPostRequest, cartPostSuccess, cartRemoveFail, cartRemoveRequest, cartRemoveSuccess, getAllCartFail, getAllCartRequest, getAllCartSuccess } from "../slices/cartSlice"



let URL = "http://localhost:7890/api";


const postCart = (userInfo,productInfo)=>async(dispatch)=>{
    try {
        cartPostRequest();
        const res = await fetch(`${URL}/cart/add/${userInfo}/${productInfo}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(cartPostSuccess(data))
        }
        else{
            dispatch(cartPostFail(data.message))
        }
    } catch (error) {
        dispatch(cartPostFail(error.message))

    }
}

const decreaseCart = (userInfo,productInfo)=>async(dispatch)=>{
    try {
        dispatch(cartDecreaseRequest());
        const res = await fetch(`${URL}/cart/decrease/${userInfo}/${productInfo}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(cartDecreaseSuccess(data));
        }
        else{
            dispatch(cartDecreaseFail(data.message))
        }
    } catch (error) {
        dispatch(cartDecreaseFail(error.message))
  
    }
}

const cartRemove = (userInfo,productInfo)=>async(dispatch)=>{
    try {
        dispatch(cartRemoveRequest());
        const res = await fetch (`${URL}/cart/remove/${userInfo}/${productInfo}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(cartRemoveSuccess(data))
        }
        else{
            dispatch(cartRemoveFail(data.message))
        }
    } catch (error) {
        dispatch(cartRemoveFail(error.message))
    }
}

const getCart = (userInfo)=>async(dispatch)=>{
    try {
        dispatch(getAllCartRequest());
        const res = await fetch(`${URL}/cart/get/${userInfo}`,{
            method:"GET",
            // headers:{
            //     "Content-Type":"application/json"
            // }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(getAllCartSuccess(data))
        }
        else{
            dispatch(getAllCartFail(data.message))
        }
    } catch (error) {
        dispatch(getAllCartFail(error.message))

    }
}

export {
    postCart,
    decreaseCart,
    cartRemove,
    getCart
}