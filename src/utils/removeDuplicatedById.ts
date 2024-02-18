import { BookProps } from "../types/book";

export const removeDuplicateById = (booksArray: BookProps[]): BookProps[] => {
  const uniqueIds = new Set<number>();
  return booksArray.filter((book) => {
    if (!uniqueIds.has(book.id)) {
      uniqueIds.add(book.id);
      return true;
    }
    return false;
  });
};
