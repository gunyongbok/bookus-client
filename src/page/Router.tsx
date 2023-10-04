import { Route, Routes } from "react-router-dom";

// Splash-screen
import Login from "./Login/Login";

// Before_Service
import ServiceAgree from "./Login/ServiceAgree";
import ServiceName from "./Login/ServiceName";
import Kakao from "./Login/Kakao";

// Main
import Main from "./Main/Main";
import ServiceInterest from "./Login/ServiceInterest";
import Logout from "./Login/Logout";

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
        <Route path="logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default Router;
