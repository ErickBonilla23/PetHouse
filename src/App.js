import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from "./Navbar.js";
import {LoginForm} from "./LoginForm.js";
import {AdopcionMascotasForm} from "./AdopcionMascotasForm.js";
 
export default function App() {
  return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/login" element={<LoginForm />} />
<Route path="/" element={<AdopcionMascotasForm />} />
</Routes>
</BrowserRouter>
  );
}

