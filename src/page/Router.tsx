import { Route, Routes } from "react-router-dom";

// Splash-screen
import Login from "./Login/Login";

// Before_Service
import ServiceAgree from "./Login/ServiceAgree";
import ServiceName from "./Login/ServiceName";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="service/agree" element={<ServiceAgree />} />
        <Route path="service/nickname" element={<ServiceName />} />
      </Routes>
    </>
  );
};

export default Router;
