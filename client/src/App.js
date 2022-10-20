import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Route ,Routes} from 'react-router-dom';
import Home from "./components/Home.js";
import AddCategories from "./components/AddCategories.js";
import AddImage from "./components/AddImage.js";
import Header from "./components/Header.js";
const App = () => {
  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/add/category" element = {<AddCategories/>}/>
      <Route path="/add/image" element = {<AddImage/>}/>
     </Routes>
    </>
  );
}

export default App;
