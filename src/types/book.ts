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

export interface BookProps {
  id: number;
  thumbnail: string;
  title: string;
  authors: string[];
}

export interface MyBooksProps {
  content: object[];
  hasNext: boolean;
  pageNumber: number;
  size: number;
}

export interface MyBookReportProps {
  id: number;
  bookTitle: string;
  thumbnail: string;
  createdAt: string;
  title: string;
  contents: string;
}

export interface IndividualBookReportProps {
  id: number;
  bookTitle: string;
  authors: string;
  title: string;
  contents: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

export interface BookStateSelectModalProps {
  libraryId: string;
  state: string;
}
