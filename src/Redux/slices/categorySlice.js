import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    loading:true,
    categoryInfo:null,
    error:null
}

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        categoryPostRequest(state){
            state.loading = true
        },
        categoryPostSuccess(state,action){
            state.loading = false;
            state.categoryInfo = action.payload
        },
        categoryPostFail(state,action){
            state.loading = false;
            state.error  = action.payload;
        },
        categoryGetAllRequest(state){
            state.loading = true;
        },
        categoryGetAllSuccess(state,action){
            state.loading = false;
            state.categoryInfo = action.payload
        },
        categoryGetAllFail(state,action){
            state.loading = false;
            state.error = action.payload
        },
        categoryGetSingleRequest(state){
            state.loading = true;

        },
        categoryGetSingleSuccess(state,action){
            state.loading = false;
            state.categoryInfo = action.payload
        },
        categoryGetSingleFail(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        categoryDeleteRequest(state){
            state.loading = true;
        },
        categoryDeleteSuccess(state,action){
            state.loading = false;
            state.categoryInfo = action.payload;
        },
        categoryDeleteFail(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        
    }
})


export const {
    categoryPostRequest,
    categoryPostSuccess,
    categoryPostFail,
    categoryGetAllRequest,
    categoryGetAllSuccess,
    categoryGetAllFail,
    categoryGetSingleRequest,
    categoryGetSingleSuccess,
    categoryGetSingleFail,
    categoryDeleteRequest,
    categoryDeleteSuccess,
    categoryDeleteFail
} = categorySlice.actions;

export default categorySlice.reducer;