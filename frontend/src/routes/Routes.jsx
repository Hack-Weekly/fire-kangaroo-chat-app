import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import Login  from "../pages/Login"

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export { Endpoints as Routes };
