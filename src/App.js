import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar.js";
import { LoginForm } from "./LoginForm.js";

export default function App() {
  return (
    <div>
      <LoginForm/>
    </div>
  )
}
