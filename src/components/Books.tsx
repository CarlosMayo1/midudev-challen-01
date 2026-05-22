import type { AppState } from '../../utils/types';
import Book from './Book';
import { useStore } from '../store/StoreContext';
import NotFoundBooks from './NotFoundBooks';

const Books = (): React.JSX.Element | React.JSX.Element[] => {
  const { books } = useStore();
  return books.length === 0 ? (
    <NotFoundBooks title="¡Lo siento! No hay libros disponibles" />
  ) : (
    <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-3 xs:grid-cols-2 gap-3">
      {books.map((book: AppState['book']) => (
        <Book key={book.ISBN} book={book} />
      ))}
    </div>
  );
};

export default Books;
