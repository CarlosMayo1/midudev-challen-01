import type { AppState } from '../../utils/types';
import { useStore, useDispatch } from '../store/StoreContext';

export const useReadingList = () => {
  const { readingList, showReadingList } = useStore();
  const dispatch = useDispatch();

  const onAddBook = (selectedBook: AppState['book']): void => {
    // determines if the list is full
    dispatch({ type: 'ADD_BOOK_TO_READING_LIST', payload: selectedBook });
  };

  const onRemoveBook = (selectedBook: AppState['book']): void => {
    dispatch({ type: 'REMOVE_BOOK_FROM_READING_LIST', payload: selectedBook });
  };

  const onShowReadingList = (): void => {
    dispatch({ type: 'SHOW_READING_LIST' });
  };

  return {
    readingList,
    onAddBook,
    onRemoveBook,
    showReadingList,
    onShowReadingList,
  };
};
