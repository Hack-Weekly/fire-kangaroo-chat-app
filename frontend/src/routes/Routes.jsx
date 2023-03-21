import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import Login from "../pages/Login"
import LoginEmail  from "../pages/LoginEmail"

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login_email" element={<LoginEmail />} />
    </Routes>
  );
};

export { Endpoints as Routes };
