import { Route, Routes } from "react-router-dom";

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

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="service/agree" element={<ServiceAgree />} />
        <Route path="service/nickname" element={<ServiceName />} />
        <Route path="kakao" element={<Kakao />} />
        <Route path="main" element={<Main />} />
        <Route path="service/interest" element={<ServiceInterest />} />
        <Route path="logout" element={<Withdraw />} />
        <Route path="search" element={<BookSearch />} />
      </Routes>
    </>
  );
};

export default Router;
