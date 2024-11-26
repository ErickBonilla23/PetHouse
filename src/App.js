<<<<<<< HEAD
import {Login} from './Login.js';
export default function App() {
  return (
    <Login/>
  );
}
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./Hero.js";
import { Navbar } from "./Navbar.js";
import { SignIn } from "./SignIn.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/SingnIn.js" element={<SignIn/>}/>
            
          </Routes>
      </BrowserRouter>
    </div>
  )
}
>>>>>>> c9bded895c76e97916f8fa450a92c359742a68a9
