import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';  
import Book from './Book';
import { getBooksFromServer } from '../redux/books/booksSlice';


const Books = () => {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.books.array);
  useEffect(() => {
    dispatch(getBooksFromServer());
  }, []);

  return (
    <ul className="books">
      {array.map((element, index) => (
        <Book
          key={index}
          index={index}
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