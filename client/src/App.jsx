import React from "react";
import "./index.css";
import UserCard from "./components/UserCards";
import Footer from "./components/Footer"
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

export default function App() {
  const user = {
    name: "AbhiShek Rao",
    email: "johndoe@example.com",
    avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
    city: "Gorakhpur",
    role: "Web Developer",
    passOut: "MCA 2025",
  };
  return (
    <>
      <Header/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <UserCard user={user} />
      </div>
      <SignUp/>
      <Login/>
     <Footer/>
     </>
  );
}


