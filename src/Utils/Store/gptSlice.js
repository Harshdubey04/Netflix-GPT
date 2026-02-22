import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSearchMovies:null,
        movieName:null,
        loading:false,
    },
    reducers:{
        toggleGptSeachView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const {movieName,movieResults}=action.payload;
            state.gptSearchMovies=movieResults;
            state.movieName=movieName;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        clearGptResults: (state) => {
            state.gptSearchMovies = null;
            state.movieName = null;
            state.showGptSearch = false;
        },
        
    },
})

export default gptSlice.reducer;
export const {toggleGptSeachView,addGptMovieResult,clearGptResults,setLoading}=gptSlice.actions;