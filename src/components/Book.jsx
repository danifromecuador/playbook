import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromServer } from '../redux/books/booksSlice';

const Book = ({index, item_id, category, title, author, progress, currentChapter}) => {
  const dispatch = useDispatch();
  const onRemoveHandler = () => {
    console.log("remove book")
    dispatch(removeBookFromServer(item_id));
    console.log(item_id)
  }

  return (
    <li className="book">

      <div className="left">
        <div className="cover">
          <div className="category">{category}</div>
          <div className="title">{title}</div>
          <div className="author">{author}</div>
        </div>
        <div className="buttons">
          <button type="button">Comments</button>
          <hr />
          <button type="button" onClick={onRemoveHandler}>Remove</button>
          <hr />
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="center">
        <div className="circular-progress">O</div>
        <div className="percentaje-progress">
          <div className="percentaje">{progress}</div>
          <div className="completed">{progress === "100" ? "Completed" : "Incomplete"}</div>
        </div>        
      </div>

      <hr />

      <div className="right">
        <div className="current-chapter">CURRENT CHAPTER</div>
        <div className="chapter">{currentChapter}</div>
        <button>UPDATE PROGRESS</button>
      </div>

    </li>
  )
}

Book.propTypes = {
  // index: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string,
  currentChapter: PropTypes.string,
};

export default Book;
