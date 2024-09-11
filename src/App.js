import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import "./styles/App.css";
import AppRoutes from "./routes/AppRoutes";

// Define a fallback component
const Loading = () => <div>Loading...</div>;

export const App = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-20 md:px-30">
      <Header />
      {/* Wrap AppRoutes with Suspense */}
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </div>
  );
};
