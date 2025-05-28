import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./component/login/index"
import Register from "./component/login/Register";
import Forgot from "./component/login/forgot";
import Form from "./component/contact/form";
import Shop from "./page/Shop";
import About from "./page/About";
import Redux from "./component/ReduxTodo";
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
        <Route path="/shop" element={<Shop />}/>
        <Route path="/redux" element={<Redux/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
