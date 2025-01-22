
import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './themeSliceHw'
import bookSliceReducer from './BooksSliceHw'

const store= configureStore({
reducer: {
    theme: themeReducer,
    books: bookSliceReducer
},
});
