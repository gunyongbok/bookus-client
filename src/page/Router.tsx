import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import ServiceAgree from "./Login/ServiceAgree";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="service/agree" element={<ServiceAgree />} />
      </Routes>
    </>
  );
};

export default Router;
