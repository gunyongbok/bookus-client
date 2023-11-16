import { useLocation } from "react-router-dom";

const BookInfo = () => {
  const location = useLocation();
  const book = location.state;
  console.log(book);
  return <div>bookInfo</div>;
};

export default BookInfo;
