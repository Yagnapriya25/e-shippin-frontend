import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productInfo: [],
  loading: true,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productPostRequest(state) {
      state.loading = true;
    },
    productPostSuccess(state, action) {
      state.loading = false;
      state.productInfo = action.payload;
    },
    productPostFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    productGetAllRequest(state) {
      state.loading = true;
    },
    productGetAllSuccess(state, action) {
      state.loading = false;
      state.productInfo = action.payload;
    },
    productGetAllFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    productGetSingleRequest(state) {
      state.loading = true;
    },
    productGetSingleSuccess(state, action) {
      state.loading = false;
      state.productInfo = action.payload;
    },
    productGetSingleFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    productDeleteRequest(state) {
      state.loading = true;
    },
    productDeleteSuccess(state, action) {
      state.loading = false;
      state.productInfo = action.payload;
    },
    productDeleteFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    productEditRequest(state) {
      state.loading = true;
    },
    productEditSuccess(state, action) {
      state.loading = false;
      state.productInfo = action.payload;
    },
    productEditFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productPostRequest,
  productPostSuccess,
  productPostFail,
  productGetAllRequest,
  productGetAllSuccess,
  productGetAllFail,
  productGetSingleRequest,
  productGetSingleSuccess,
  productGetSingleFail,
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteFail,
  productEditRequest,
  productEditSuccess,
  productEditFail,
} = productSlice.actions;

export default productSlice.reducer;
