import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";

const Input = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  function handleTitleInputChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorInputChange(event) {
    setAuthor(event.target.value);
  }

  function handleAddButtonClick(event) {
    event.preventDefault();
    if (title && author) dispatch(addBook({ "title": title, "author": author }));
  }

  return (
    <div className="input">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Title" onChange={handleTitleInputChange} value={title}/>
        <input type="text" placeholder="Author" onChange={handleAuthorInputChange} value={author}/>
        <button onClick={handleAddButtonClick}>ADD A BOOK</button>
      </form>
    </div>
  )
}

export default Input;