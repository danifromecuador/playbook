import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, addBookToServer } from "../redux/books/booksSlice";
import '../styles/Input.css'

const Input = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState(0);
  const bookList = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  function handleTitleInputChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorInputChange(event) {
    setAuthor(event.target.value);
  }

  useEffect(() => {
    setId(bookList.length);
  }, [bookList]);

  function handleAddButtonClick(event) {
    event.preventDefault();
    if (title && author) {
      dispatch(
        addBookToServer({
          item_id: `item${id+1}`,
          title: title,
          author: author,
          category: "unknown",
        })
      ).then(() => {
        setId((prevId) => prevId + 1);
        dispatch(
          addBook({
            item_id: `item${id}`,
            title: title,
            author: author,
            category: "unknown",
          })
        );
      });
    }
  
    setTitle("");
    setAuthor("");
  }
  return (
    <div className="input">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input className="inputTitle" type="text" placeholder="Title" onChange={handleTitleInputChange} value={title} />
        <input className="inputAuthor" type="text" placeholder="Author" onChange={handleAuthorInputChange} value={author} />
        <button className="addABook" onClick={handleAddButtonClick}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Input;
