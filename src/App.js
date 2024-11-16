import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./Hero.js";
import { Navbar } from "./Navbar.js";
import { CreateAccount } from "./CreateAccount.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/CreateAccount" element={<CreateAccount/>}/>
            
          </Routes>
      </BrowserRouter>
    </div>
  )
}
