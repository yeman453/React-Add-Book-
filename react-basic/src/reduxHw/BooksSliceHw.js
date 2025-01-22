// import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

import { createSlice } from "@reduxjs/toolkit";
//import { addBook } from "../redux/BooksSlices";

// const booksSlice=createSlice({
//     name: "books",
//     initialSlice: [],
//     reducers: {
//         addBook: (state,action)=>{
//             state.push(action.payload)
//         },
        
//     }
// });
// export const {addBook}=booksSlice.actions;
// export const {deleteBook}=booksSlice.actions;
// export default booksSlice.reducer;

const BooksSlice =createSlice({
    name: "books",
    initialState: [],
    reducers: {
        addBook: (state,action)=>{
            console.log("add book")
            state.push(action.payload)
        },
        removeBook: (state,action)=>{
            console.log(action.payload)
            console.log("Hello")
            state.filter((_, i) => i !== action.payload);
           
        }
    }
});
export const {addBook,removeBook}=BooksSlice.actions;

export default BooksSlice.reducer;