import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const array = useSelector((state) => state.books.array);

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
