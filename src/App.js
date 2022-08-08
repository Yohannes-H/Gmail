import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
