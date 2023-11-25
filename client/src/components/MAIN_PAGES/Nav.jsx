import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Nav({
  searchQuery,
  searchField,
  setSearchQuery,
  searchHandler,
}) {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/");
  };

  function onSearchChange(e) {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className="container text-center">
          <Link className="navbar-brand" to="/home">
            <strong>TasteTreasure.com</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/recipes">
                  Recipes
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to=""
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Your Recipes
                </Link>
                <ul className="dropdown-menu text-center">
                  <li>
                    <Link className="dropdown-item" to="/addRecipe">
                      Add Recipe <i className="fas fa-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/editRecipe">
                      Edit Recipe <i className="far fa-edit"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3 text-center">
        <form className="d-flex justify-content-center" role="search" onSubmit={searchHandler}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={searchField}
            value={searchQuery}
            onChange={onSearchChange}
            required
          />
          <button className="btn btn-success" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}
