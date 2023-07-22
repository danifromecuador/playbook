import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import {fetchArray} from '../services/bookStoreAPI';
import { useEffect } from 'react';


const Books = () => {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.books.array);

  useEffect(() => {
    dispatch(fetchArray());
  }, [dispatch]);

  useEffect(() => {
    if (array) console.log(array);
  }, [array]);


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
