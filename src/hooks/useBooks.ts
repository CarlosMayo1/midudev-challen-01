import { useState, useEffect } from 'react';
import getBooks from '../../books.json';
import { useStore, useDispatch } from '../store/StoreContext';

interface FilterParams {
  genre: string;
  pages: string;
}

export const useBooks = () => {
  const { books } = useStore();
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState<FilterParams>({
    genre: '',
    pages: '',
  });

  const onFilterByParams = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFilterParams((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    // getting data from fake database
    const fetchData = async (params: FilterParams): Promise<void> => {
      dispatch({ type: 'LOADING_BOOKS' });
      // ⚠️ check to add a loading for more fancy process
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (params.genre === '' && params.pages === '') {
        dispatch({ type: 'FETCH_BOOKS', payload: getBooks });
      } else if (params.genre !== '' && params.pages !== '') {
        const filteredBooks = getBooks.filter((book) => {
          if (params.genre === book.genre && params.pages === '0 - 300') {
            return book.pages > 0 && book.pages <= 300;
          }

          if (params.genre === book.genre && params.pages === '301 - 700') {
            return book.pages > 300 && book.pages <= 700;
          }

          if (params.genre === book.genre && params.pages === '701 - 1000+') {
            return book.pages > 700;
          }
        });

        dispatch({ type: 'FETCH_BOOKS', payload: filteredBooks });
      } else if (params.genre !== '') {
        const filteredBooks = getBooks.filter(
          (book) => book.genre === params.genre,
        );
        dispatch({ type: 'FETCH_BOOKS', payload: filteredBooks });
      } else {
        const filteredBooks = getBooks.filter((book) => {
          if (params.pages === '0 - 300') {
            return book.pages > 0 && book.pages <= 300;
          }

          if (params.pages === '301 - 700') {
            return book.pages > 300 && book.pages <= 700;
          }

          if (params.pages === '701 - 1000+') {
            return book.pages > 700;
          }
        });
        dispatch({ type: 'FETCH_BOOKS', payload: filteredBooks });
      }

      dispatch({ type: 'LOADED' });
    };

    fetchData(filterParams);
  }, [filterParams, dispatch]);

  return { books, onFilterByParams };
};
