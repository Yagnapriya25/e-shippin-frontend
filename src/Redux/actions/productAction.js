import { productDeleteFail, productDeleteRequest, productDeleteSuccess, productEditFail, productEditRequest, productEditSuccess, productGetAllFail, productGetAllRequest, productGetAllSuccess, productGetSingleFail, productGetSingleRequest, productGetSingleSuccess, productPostFail, productPostRequest, productPostSuccess } from "../slices/productSlice";






let URL = "http://localhost:7890/api";

const productPost = (credential,categoryInfo,userInfo)=>async(dispatch)=>{
    try {
        dispatch(productPostRequest());
        const {cat_id}=categoryInfo;
        const {id}=userInfo;
        const res = await fetch(`${URL}/product/${cat_id}/${id}`,{
            method:"POST",
            body:JSON.stringify(credential),
            headers:{
                "Content-Type":"application/json"
            }
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
        const res = await fetch(`${URL}/product/getall`,{
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
        const {id}=productInfo;
        const {token}=userInfo;
        const res = await fetch(`${URL}/product/getsingle/${id}`,{
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
        const res = await fetch(`${URL}/product/remove/${id}`,{
            method:"POST",
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
        const formData = new FormData();
        formData.append("name", credential.name);
        formData.append("description1", credential.description1);
        formData.append("description2", credential.description2);
        formData.append("description3", credential.description3);
        formData.append("price", credential.price); // Include price
        formData.append("Instock", credential.Instock); // Include Instock

        // Append images if provided
        if (credential.images) {
            credential.images.forEach(image => {
                formData.append("images", image); // Assuming 'images' is an array of files
            });
        }
        
        const res = await fetch(`${URL}/product/edit/${id}`,{
            method:"PUT",
            body:formData,
            headers:{
                "Content-Type":"application/json"
            }
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

export {
    productPost,
    getAllProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct
};
