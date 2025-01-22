import { createSlice } from "@reduxjs/toolkit";
import reducer from "./themeSlice";

const booksSlice=createSlice({
    name: "books",
    initialState: [],
    reducers: {
      addBook: (state,action)=>{
        state.push(action.payload)
      }
    }
});
export const {addBook} =booksSlice.actions;
export default booksSlice.reducer;
