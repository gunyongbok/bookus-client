import { Route, Routes, useNavigate } from "react-router-dom";

// Root
import RootPage from "./Login/RootPage";

// Login , Wtihdraw
import Login from "./Login/Login";
import Withdraw from "./Login/Withdraw";

// Before_Service
import ServiceAgree from "./Login/ServiceAgree";
import ServiceName from "./Login/ServiceName";
import Kakao from "./Login/Kakao";
import ServiceInterest from "./Login/ServiceInterest";

// MainPage
import Main from "./Main/Main";

// Search
import BookSearch from "./Search/BookSearch";

// Book
import BookInfo from "./Book/BookInfo";
import Library from "./Book/Library";
import BookDetail from "./Book/BookDetail";

// Report
import BookReport from "./Book/BookReport";
import BookReportView from "./Book/BookReportView";
import BookReportEdit from "./Book/BookReportEdit";
import { useEffect } from "react";
import validateToken from "../Api/token/validateToken";

const Router = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // validateToken 함수에 navigate 함수를 전달하여 호출합니다.
    validateToken(navigate);
  }, [navigate]);
  return (
    <>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="login" element={<Login />} />
        <Route path="service/agree" element={<ServiceAgree />} />
        <Route path="service/nickname" element={<ServiceName />} />
        <Route path="kakao" element={<Kakao />} />
        <Route path="main" element={<Main />} />
        <Route path="service/interest" element={<ServiceInterest />} />
        <Route path="logout" element={<Withdraw />} />
        <Route path="search" element={<BookSearch />} />
        <Route path="bookinfo" element={<BookInfo />} />
        <Route path="library" element={<Library />} />
        <Route path="bookdetail/:libraryId" element={<BookDetail />} />
        <Route path="bookreport/:libraryId" element={<BookReport />} />
        <Route path="bookreportview/:reportId" element={<BookReportView />} />
        <Route path="bookreportedit/:reportId" element={<BookReportEdit />} />
      </Routes>
    </>
  );
};

export default Router;
