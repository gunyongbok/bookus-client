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

export interface BookData {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  thumbnail: string;
  title: string;
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

export interface FiveFavoriteProps {
  bookId: number;
  imageUrl: string;
  isbn: string;
}

export interface HighRatingBookProps {
  isbn: string;
  title: string;
  authors: string[];
  thumbnail: string;
  rating: number;
}

export interface ClickInterface {
  libraryClicked: boolean;
  bookReportClicked: boolean;
}

export interface LibraryInterface {
  books: MyBooksProps | undefined;
  myBooks: BookProps[];
  bookServerState: string;
  prevBookServerState: string;
  activeStateIndexOfBook: number;
}

export interface BookReportInterface {
  bookReports: MyBooksProps | undefined;
  myBookReports: MyBookReportProps[];
  bookReportServerState: string;
  prevBookReportServerState: string;
  activeStateIndexOfReport: number;
}
