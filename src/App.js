import React from "react";

import Header from "./components/Header/Header";
import "./styles/App.css";
import AppRoutes from "./routes/AppRoutes";

export const App = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-20 md:px-30">
      <Header />
      <AppRoutes />
    </div>
  );
};
