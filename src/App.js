// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Global Navbar at the top */}
        <Navbar />

        {/* Main route-based content */}
        <main className="flex-grow">
          <AppRoutes />
        </main>

        {/* Global Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
