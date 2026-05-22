import type { AppState, IBook, StoreActions } from '../../utils/types';

export const initialStore = {
  books: [] as Array<IBook>,
  book: {} as IBook,
  isLoading: true,
  genre: '',
  filterParams: { genre: '', pages: '' },
  readingList: [],
  showReadingList: false,
};

export const storeReducer = (state: AppState, action: StoreActions) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return {
        ...state,
        books: action.payload,
      };

    case 'LOADING_BOOKS':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOADED':
      return {
        ...state,
        isLoading: false,
      };
    case 'SHOW_READING_LIST':
      return {
        ...state,
        showReadingList: !state.showReadingList,
      };
    case 'ADD_BOOK_TO_READING_LIST': {
      if (state.readingList.length === 4) {
        console.log('The list is full and does not accept any other book!');
        return state;
      }

      const exists = state.readingList.some(
        (book) => book.ISBN === action.payload.ISBN,
      );
      if (exists) {
        return state;
      }
      return {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
    }
    case 'REMOVE_BOOK_FROM_READING_LIST': {
      const filteredBooks = state.readingList.filter(
        (book) => book.ISBN !== action.payload.ISBN,
      );
      return {
        ...state,
        readingList: filteredBooks,
      };
    }
    default:
      return state;
  }
};
