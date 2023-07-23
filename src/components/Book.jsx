import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookFromServer } from '../redux/books/booksSlice';
import '../styles/Book.css';
import progressImage from '../assets/progress.png';

const Book = ({index, item_id, category, title, author, progress, currentChapter}) => {
  const dispatch = useDispatch();

  const onRemoveHandler = () => {
    dispatch(removeBookFromServer(item_id));
    dispatch(removeBook(index));
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
        <img src={progressImage} alt="" className='circular-progress'/>
        <div className="percentaje-progress">
          <div className="percentaje">{progress}%</div>
          <div className="completed">{progress === "100" ? "Completed" : "Incomplete"}</div>
        </div>        
      </div>

      <hr  className='hrtwo'/>

      <div className="right">
        <div className="current-chapter">CURRENT CHAPTER</div>
        <div className="chapter">Chapter {currentChapter}</div>
        <button className='updateProgress'>UPDATE PROGRESS</button>
      </div>

    </li>
  )
}

Book.propTypes = {
  index: PropTypes.number.isRequired,
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number,
  currentChapter: PropTypes.number,
};

export default Book;
