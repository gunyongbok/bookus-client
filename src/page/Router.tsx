import { Route, Routes } from "react-router-dom";

// Splash-screen
import Login from "./Login/Login";

// Before_Service
import ServiceAgree from "./Login/ServiceAgree";
import ServiceName from "./Login/ServiceName";
import Kakao from "./Login/Kakao";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="service/agree" element={<ServiceAgree />} />
        <Route path="service/nickname" element={<ServiceName />} />
        <Route path="kakao" element={<Kakao />} />
      </Routes>
    </>
  );
};

export default Router;
