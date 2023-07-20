import Book from './Book';
const Books = () => {
  const array = [
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '100',
      currentChapter: 'Chapter 17',
    },
    {
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: '8',
      currentChapter: 'Chapter 5',
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Thomas Piketty',
      progress: '50',
      currentChapter: 'Chapter 3',
    },
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
