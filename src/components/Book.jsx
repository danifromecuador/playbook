import PropTypes from 'prop-types';

const Book = ({array}) => {  
  return (
    <li className="book">

      <div className="left">
        <div className="cover">
          <div className="category">{array.category}</div>
          <div className="title">{array.title}</div>
          <div className="author">{array.author}</div>
        </div>
        <div className="buttons">
          <button type="button">Comments</button>
          <hr />
          <button type="button">Remove</button>
          <hr />
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="center">
        <div className="circular-progress">O</div>
        <div className="percentaje-progress">
          <div className="percentaje">{array.progress}</div>
          <div className="completed">{array.progress === "100" ? "Completed" : "Incomplete"}</div>
        </div>        
      </div>

      <hr />

      <div className="right">
        <div className="current-chapter">CURRENT CHAPTER</div>
        <div className="chapter">{array.currentChapter}</div>
        <button>UPDATE PROGRESS</button>
      </div>

    </li>
  )
}

Book.propTypes = {
  array: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    currentChapter: PropTypes.string.isRequired,
  }).isRequired,

};

export default Book;