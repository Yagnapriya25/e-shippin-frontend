import { productPostRequest } from "../slices/productSlice";






let URL = "http://localhost:7890/api";

const productPost = (credential)=>(dispatch)=>{
    try {
        dispatch(productPostRequest());
        const {name,description1,description2,description3,price,Instock}=credential;
        // const res = await fetch(`${URL}/product/create/`)

        
        
    } catch (error) {
        
    }

}