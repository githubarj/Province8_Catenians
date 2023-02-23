import "./App.css";
import { Route, Routes } from "react-router-dom";

// picture imports

import Home from "./Components/Pages/Home";
import Layout from "./Components/Elements/Layout";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path ="/login" element={<Login/>} />
        <Route path="/register" element= {<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
