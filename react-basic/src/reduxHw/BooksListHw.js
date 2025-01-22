// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addBook } from "./BooksSliceHw";

// function BooksListHw() {
//   const [name, setName] = useState("");
//   const [author, setAuthor] = useState("");
//   const books = useSelector((state) => state.book);
//   console.log(books);
//   const dispatch = useDispatch();
//   const handleAdd = () => {
//     if (name && author) {
//       dispatch(addBook({ name, author }));
//       setName("");
//       setAuthor("");
//     }
//   };
//   return (
//     <div>
//       <h1>Books</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Book Title"
//         required
//       />
//       <br />
//       <input
//         type="text"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//         placeholder="Book Author"
//         required
//       />
//       <br />
//       <button onClick={handleAdd}>Add Book</button>
//       {books.map((book, index) => {
//         return (
//           <React.Fragment key={index}>
//             <>
//               <strong>{book.name}</strong>
//               <br />
//               <p>{book.author}</p>
//             </>
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// }

// export default BooksListHw;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook , removeBook } from "./BooksSliceHw";

function BooksListHw() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const books = useSelector((state) => state.books);
  console.log(books);
  const dispatch = useDispatch();
  const handleAdd = () => {
    if ((name, author)) {
      dispatch(addBook({ name, author }));
      setName("");
      setAuthor("");
    }
  };

  return (
    <>
      <div>
        {books.map((book, index) => {
          return (
            <React.Fragment>
              <div
                style={{
                  background: "aqua",
                  width: "300px",
                  height: "130px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "1% auto",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <strong style={{ marginTop: "1rem" }}>{book.name}</strong>
                  <p>{book.author}</p>
                </div>

                <button
                  onClick={() => dispatch(removeBook(index))}
                  style={{ background: "red", borderRadius: "7px" }}
                >
                  Delete
                </button>
              </div>
            </React.Fragment>
          );
        })}
        <h1>Books</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Please add title"
        />
        <br />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          placeholder="Please add author"
        />
        <br />
        <button onClick={handleAdd}>Add Book</button>
      </div>
    </>
  );
}

export default BooksListHw;
