const Book = () => {
  return (
    <li className="book">

      <div className="left">
        <div className="cover">
          <div className="category">Action</div>
          <div className="title">The Hunger Games</div>
          <div className="author">Suzanne Collins</div>
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
          <div className="percentaje">64%</div>
          <div className="completed">Completed</div>
        </div>        
      </div>

      <hr />

      <div className="right">
        <div className="current-chapter">CURRENT CHAPTER</div>
        <div className="chapter">Chapter 17</div>
        <button>UPDATE PROGRESS</button>
      </div>

    </li>
  )
}

export default Book;