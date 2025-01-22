
import {configureStore} from '@reduxjs/toolkit';
import themeReducer from "./themeSlice"
import booksSliceReducer from './BooksSlices'



export const store =configureStore ({
    reducer: {
        theme: themeReducer,
        books: booksSliceReducer
        
    }
})
