import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSearchMovies:null,
        movieName:null,
    },
    reducers:{
        toggleGptSeachView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const {movieName,movieResults}=action.payload;
            state.gptSearchMovies=movieResults;
            state.movieName=movieName;
        }
    },
})

export default gptSlice.reducer;
export const {toggleGptSeachView,addGptMovieResult}=gptSlice.actions;