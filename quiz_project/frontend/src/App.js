import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Quiz_app from "./components/Quiz_app";
import QuizResult from "./components/QuizResult";
//import LoginValidation from "./Validation/LoginValidation";
//import RegisterValidation from "./components/RegisterValidation";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Quiz_app" element={<Quiz_app />} />
        <Route path="/QuizResult" element={<QuizResult />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
