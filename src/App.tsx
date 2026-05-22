import Books from './components/Books';
import ReadingList from './components/RedingList';
import { useBooks } from './hooks/useBooks';
import { useReadingList } from './hooks/useReadingList';
import { IconBookmarks } from '@tabler/icons-react';
import { useStore } from './store/StoreContext';
import Spinner from './components/UI/Spinner/Spinner';

function App() {
  // do the loading section
  const { onFilterByParams } = useBooks();
  const { onShowReadingList, readingList } = useReadingList();
  const { isLoading } = useStore();

  return (
    <main className="flex justify-center relative">
      <section className="relative w-3xl p-6 min-h-screen">
        <h1 className="text-2xl font-bold text-center mb-3">
          13 libros disponibles
        </h1>
        <form className="flex flex-row justify-between mb-5 items-center gap-4">
          <div className="flex flex-col">
            <label htmlFor="pages" className="mr-2">
              Filtrar por paginas:
            </label>
            <select
              className="border border-gray-300"
              id="pages"
              name="pages"
              onChange={onFilterByParams}
            >
              <option value="">Seleccionar por página</option>
              <option value="0 - 300">0 - 300 páginas</option>
              <option value="301 - 700">301 - 700 páginas</option>
              <option value="701 - 1000+">701 - 1000+ páginas</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="genre" className="mr-2">
              Filtrar por género:
            </label>
            <select
              className="border border-gray-300"
              id="genre"
              name="genre"
              onChange={onFilterByParams}
            >
              <option value="">Seleccionar género</option>
              <option value="Ciencia ficción">Ciencia ficción</option>
              <option value="Fantasía">Fantasía</option>
              <option value="Terror">Terror </option>
              <option value="Zombies">Zombies </option>
            </select>
          </div>
          <div>
            <button
              className="relative cursor-pointer"
              type="button"
              onClick={onShowReadingList}
            >
              <IconBookmarks color="orange" size={28} />
              {readingList.length >= 1 ? (
                <span className="absolute w-6 h-6 -top-4 -right-5 text-xs font-bold bg-amber-300 p-1 rounded-full flex justify-center">
                  {readingList.length}
                </span>
              ) : null}
            </button>
          </div>
        </form>

        <section className="h-full w-full flex justify-center">
          {isLoading ? <Spinner /> : <Books />}
        </section>
      </section>
      <ReadingList />
    </main>
  );
}

export default App;
