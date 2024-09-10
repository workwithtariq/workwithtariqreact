import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project/Project";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import "./styles/App.css";
import AppRoutes from "./routes/AppRoutes";

export const App = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <Header />
      <AppRoutes />
    </div>
  );
};
