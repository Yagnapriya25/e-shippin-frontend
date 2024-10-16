import { getSingleUserProductFail, getSingleUserProductRequest, getSingleUserProductSuccess, productDeleteFail, productDeleteRequest, productDeleteSuccess, productEditFail, productEditRequest, productEditSuccess, productGetAllFail, productGetAllRequest, productGetAllSuccess, productGetSingleFail, productGetSingleRequest, productGetSingleSuccess, productPostFail, productPostRequest, productPostSuccess, searchProductFail, searchProductRequest, searchProductSuccess } from "../slices/productSlice";








const productPost = (credential,categoryInfo,userInfo)=>async(dispatch)=>{
    try {
        dispatch(productPostRequest());
        const {cat_id}=categoryInfo;
        const {id}=userInfo;
  
        const res = await fetch(`${process.env.REACT_APP_URL}/product/create/${categoryInfo}/${userInfo}`,{
            method:"POST",
            body:credential,
           
        })        
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(productPostSuccess(data))
        }
        else{
            dispatch(productPostFail(data.message))
        }
        
    } catch (error) {
        dispatch(productPostFail(error.message))
    }

}

const getAllProduct = ()=>async(dispatch)=>{
    try {
        dispatch(productGetAllRequest());
        const res = await fetch(`${process.env.REACT_APP_URL}/product/getall`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(productGetAllSuccess(data))
        }
        else{
            dispatch(productGetAllFail(data.message))
        }
    } catch (error) {
        dispatch(productGetAllFail(error.message))
    }
}

const getSingleProduct = (productInfo,userInfo)=>async(dispatch)=>{
    try {
        dispatch(productGetSingleRequest());
        const {p_id}=productInfo;
        const {token}=userInfo;
        const res = await fetch(`${process.env.REACT_APP_URL}/product/getsingle/${productInfo}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(productGetSingleSuccess(data))
        }
        else{
            dispatch(productGetSingleFail(data.message))
        }
    } catch (error) {
        dispatch(productGetSingleFail(error.message))
    }
}
const deleteProduct = (productInfo)=>async(dispatch)=>{
    try {
        dispatch(productDeleteRequest());
        const {id} = productInfo;
        const res = await fetch(`${process.env.REACT_APP_URL}/product/remove/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(productDeleteSuccess(data))
        }
        else{
            dispatch(productDeleteFail(data.message))
        }
    } catch (error) {
        dispatch(productDeleteFail(error.message))

    }
}
const updateProduct = (credential,productInfo)=>async(dispatch)=>{
    try {
        dispatch(productEditRequest());
        const {id} = productInfo;
       
       
        
        const res = await fetch(`${process.env.REACT_APP_URL}/product/edit/${productInfo}`,{
            method:"PUT",
            body:credential,
            // headers:{
            //     "Content-Type":"application/json"
            // }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(productEditSuccess(data))
        }
        else{
            dispatch(productEditFail(data.message))
        }
    } catch (error) {
         dispatch(productDeleteFail(error.message))   
    }
}

const getSingleUserProduct = (userInfo) =>async(dispatch)=>{
    try {
        dispatch(getSingleUserProductRequest());
        const {id}= userInfo;
        const res = await fetch(`${process.env.REACT_APP_URL}/product/getproduct/${userInfo}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(getSingleUserProductSuccess(data));
        }
        else{
            dispatch(getSingleUserProductFail(data.message));
        }
    } catch (error) {
        dispatch(getSingleUserProductFail(error.message))
    }
}
const searchProduct = (productInfo)=>async(dispatch)=>{
    try {
        dispatch(searchProductRequest());
        const res = await fetch(`${process.env.REACT_APP_URL}/product/search/${productInfo}`,{
            method:"GET",
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(searchProductSuccess(data))
        }
        else{
            dispatch(searchProductFail(data.message))
        }
    } catch (error) {
        dispatch(searchProductFail(error.message))

    }
}

export {
    productPost,
    getAllProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    getSingleUserProduct,
    searchProduct
};
