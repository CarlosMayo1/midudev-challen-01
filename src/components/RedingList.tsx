import { IconX } from '@tabler/icons-react';
import { useReadingList } from '../hooks/useReadingList';
import NotFoundBooks from './NotFoundBooks';

const displayReadingList = (isOpen: boolean): string => {
  return isOpen ? 'translate-x-0' : 'translate-x-full';
};

const ReadingList = (): React.JSX.Element => {
  const { readingList, showReadingList, onShowReadingList, onRemoveBook } =
    useReadingList();

  return (
    <div
      className={`bg-amber-300 fixed right-0 bottom-0 top-0 w-50 min-h-screen transition-transform duration-300 ease-in-out ${displayReadingList(showReadingList)} ease-linear`}
    >
      <div className="absolute right-4 top-2">
        <button
          type="button"
          className="cursor-pointer"
          onClick={onShowReadingList}
        >
          <IconX
            size={18}
            className="rotate-0 duration-500 hover:transition hover:duration-500 hover:rotate-210 ease-in-out"
          />
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center p-3 h-full">
        <h1 className="text-lg font-semibold text-center">Lista de lectura</h1>
        {readingList.length === 0 ? (
          <NotFoundBooks title="No hay libros disponibles" />
        ) : (
          readingList.map((book) => (
            <article key={book.ISBN} onClick={() => onRemoveBook(book)}>
              <img
                src={book.cover}
                className="w-28 h-38 object-contain"
                alt="small image of the selected book"
              />
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default ReadingList;
