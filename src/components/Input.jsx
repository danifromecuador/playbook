import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, addBookToServer } from "../redux/books/booksSlice";

const Input = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const bookList = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  function handleTitleInputChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorInputChange(event) {
    setAuthor(event.target.value);
  }

  function handleAddButtonClick(event) {
    event.preventDefault();
    if (title && author) {
      dispatch(
        addBookToServer({
          item_id: 'item' + bookList.length,
          title: title,
          author: author,
          category: "unknown",
        })
      );
      dispatch(
        addBook({
          item_id: 'item' + bookList.length,
          title: title,
          author: author,
          category: "unknown",
        })
      );
    }

    setTitle("");
    setAuthor("");
  }
  
  return (
    <div className="input">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Title" onChange={handleTitleInputChange} value={title} />
        <input type="text" placeholder="Author" onChange={handleAuthorInputChange} value={author} />
        <button onClick={handleAddButtonClick}>ADD A BOOK</button>
      </form>
    </div>
  );
};

export default Input;
