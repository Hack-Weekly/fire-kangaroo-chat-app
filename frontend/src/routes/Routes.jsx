import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import Login from "../pages/Login"
import LoginEmail  from "../pages/LoginEmail"
import Dashboard from '../pages/Dashboard'

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login_email" element={<LoginEmail />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
};

export { Endpoints as Routes };
