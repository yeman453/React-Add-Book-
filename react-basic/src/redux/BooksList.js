import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BooksSlices";

function BookList(){
    const [name,setName]=useState("");
    const [author,setauthor]=useState();
    const books=useSelector(state=>state.books);
    console.log(books)
    const dispatch=useDispatch();

    const handleAdd = ()=>{
        if(name && author){
            dispatch(addBook({name,author}))
            setName("");
            setauthor("")
        }
    }
    return(
        <>
        <h1>Books</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Please add a book title"/>
        <input type="text" value={author} onChange={(e)=>setauthor(e.target.value)} required placeholder="Please add author name" />
        <button onClick={handleAdd}>Add Book</button>
        </>
    )
}
export default BookList;