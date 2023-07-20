import Book from './Book';
const Books = () => {
  const array = [
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '100',
      currentChapter: 'Chapter 17',
    }
  ];

  return (
    <ul className="books">
      {array.map((element, index) => (
        <Book
          key={index}
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
