import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";

// picture imports

import Post from "./Components/Post";
import Home from "./Components/Home";
import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/login"} element={<div> login</div>} />
      </Route>
    </Routes>
  );
}

export default App;
