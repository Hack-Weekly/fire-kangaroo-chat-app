import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export { Endpoints as Routes };
