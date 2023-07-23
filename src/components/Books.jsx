import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';  
import Book from './Book';
import { getBooksFromServer } from '../redux/books/booksSlice';
import '../styles/Books.css'

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(getBooksFromServer());
  }, [dispatch]);

  return (
    <ul className="books">
      {books.map((element, index) => (
        <Book
          key={index}
          index={index}
          item_id={element.item_id}
          category={element.category}
          title={element.title}
          author={element.author}
          progress={64}
          currentChapter={17}
        />
      ))}
    </ul>
  );
};

export default Books;