import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";


export const fetchPosts=createAsyncThunk("data/posts",async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await response.json();
    return data;
})

const postSlice=createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.loading=false;
            state.posts=action.payload
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.loading=false;
            state.error="Error"
        })
    }
})
export default postSlice.reducer
