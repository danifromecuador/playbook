import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';  
import Book from './Book';
import { getBooksFromServer } from '../redux/books/booksSlice';


const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(getBooksFromServer());
  }, []);

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
          progress={element.progress}
          currentChapter={element.currentChapter}
        />
      ))}
    </ul>
  );
};

export default Books;

// Path: src/components/Books.js