import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import bookStoreAPI from '../services/bookStoreAPI';

const Books = () => {
  const dispatch = useDispatch();
  // const booksArray = useSelector((state) => state.books.array);

  useEffect(() => {
    dispatch(bookStoreAPI.getBooks());
  }, [dispatch]);

  const booksArray = [{index: 0, title: "No books found", category: "No books found", author: "juan perez"},];

  // useEffect(() => {
  //   console.log(booksArray);
  // }, [booksArray]);


  return (
    <ul className="books">
      {booksArray.map((element, index) => (
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
      <Book />
    </ul>
  );
};

export default Books;

// Path: src/components/Books.jsx
