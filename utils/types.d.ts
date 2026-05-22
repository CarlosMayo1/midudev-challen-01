export interface AppState {
  books: Array<IBook>;
  book: IBook;
  isLoading: boolean;
  genre: string;
  filterParams: FilterParams;
  readingList: Array<IBook>;
  showReadingList: boolean;
}

type FilterParams = {
  genre: string;
  pages: string;
};

interface IBook {
  title: string;
  genre: string;
  pages: number;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

type Author = {
  name: string;
  otherBooks: Array<string>;
};

type StoreActions =
  | { type: 'FETCH_BOOKS'; payload: AppState['books'] }
  | { type: 'LOADING_BOOKS' }
  | { type: 'LOADED' }
  | { type: 'ADD_BOOK_TO_READING_LIST'; payload: IBook }
  | { type: 'REMOVE_BOOK_FROM_READING_LIST'; payload: IBook }
  | { type: 'SHOW_READING_LIST' };
