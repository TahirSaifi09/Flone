import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Login from "./component/Login/index"
import Register from "./component/Login/Register";
import Forgot from "./component/Login/forgot";
import Form from "./component/Contact/form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Form />}/>
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot" element={<Forgot />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
