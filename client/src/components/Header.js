import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-danger px-2">
        <Link class="navbar-brand" to="/">
          Ad Gallery
        </Link>
        <button
          class="navbar-toggler"
          data-bs-toggle="collapse" 
          data-bs-target="#collapseExample"
           aria-expanded="false" 
           aria-controls="collapseExample"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto"></ul>
          <Link to="/add/image">
            <button className="btn btn-success  my-2">Add Image</button>
          </Link>
          
          <Link to="/add/category">
            <button className="btn btn-light  mx-3 my-2">Add Category</button>
          </Link>
        </div>
      </nav>
    </>
  )
};

export default Header;
