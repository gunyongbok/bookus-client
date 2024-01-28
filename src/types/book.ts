export interface BookResults {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

export interface BookInfoProps {
  libraryId: number;
  bookTitle: string;
  author: string[];
  bookId: number;
  isbn: string;
  readingStatus: string;
  rating: number;
  startReadingAt: string;
  endReadingAt: string;
  staticsRating: number;
  thumbnail: string;
}

export interface BookReport {
  id: number;
  title: string;
  contents: string;
  createdAt: string;
}

export interface FavoriteBookProps {
  id: string;
  thumbnail: string;
  title: string;
  authors: string[];
}
