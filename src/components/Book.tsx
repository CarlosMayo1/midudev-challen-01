import type { AppState } from '../../utils/types';
import { useReadingList } from '../hooks/useReadingList';
import { IconBookmark } from '@tabler/icons-react';

const Book = ({ book }: { book: AppState['book'] }): React.JSX.Element => {
  const { readingList, onAddBook } = useReadingList();

  const isOnTheReadingList = (): boolean => {
    return readingList.some((el: AppState['book']) => el.ISBN === book.ISBN);
  };

  return (
    <article onClick={() => onAddBook(book)}>
      <div className="relative w-32 h-52">
        <img className="w-32 h-52 object-cover" src={book.cover} />
        <IconBookmark
          fill="orange"
          color="orange"
          className={
            isOnTheReadingList() ? 'block absolute top-2 right-2' : 'hidden'
          }
        />
      </div>
      <h2 className="text-sm font-bold">{book.title}</h2>
      <p className="text-xs">
        <span className="font-bold">Paginas:</span> {book.pages}
      </p>
      <p className="text-xs">
        <span className="font-bold">Año:</span> {book.year}
      </p>
      <p className="text-xs">
        <span className="font-bold">Autor:</span> {book.author.name}
      </p>
      <p className="text-xs">
        <span className="font-bold">Género:</span> {book.genre}
      </p>
    </article>
  );
};

export default Book;
