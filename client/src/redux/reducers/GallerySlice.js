import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const initialvalues = {
    images: [],
    categories: [],
};
export const getAllImages = createAsyncThunk('images/getAllImages ', async() =>{
    const res = await axios.get("http://localhost:5000/api/get/allimages");
    return res.data;
});



export const getAllcategories = createAsyncThunk('images/getAllcategories',async() =>{
    const res = await axios.get("http://localhost:5000/api//get/cetogories");
    return res.data;
});

export const AddCategory = createAsyncThunk('images/AddCategory',async(payload) =>{
    const res = await axios.post("http://localhost:5000/api/add",payload);
    return res.data;
});

export const PostImage = createAsyncThunk('images/PostImage',async(payload) =>{
    const res = await axios.post("http://localhost:5000/api/upload/image", payload);
    return res.data;
});
export const getSingleImages = createAsyncThunk('images/getSingleImage ', async(payload) =>{
    const res = await axios.get(`http://localhost:5000/api/get/image?category=${payload}`);
    return res.data;
});

const gallerySlice = createSlice({
    name: 'gallerySlice',
    initialState: initialvalues,
    reducers: {},
    extraReducers: {
        [getAllImages.fulfilled]: (state,action) => {
            state.images = action.payload;
        },
        [getAllcategories.fulfilled]: (state,action) => {
            state.categories = action.payload;
        },
    
    [getSingleImages.fulfilled]: (state,action) => {
        state.images = action.payload;
    },
},
});

export default gallerySlice.reducer;