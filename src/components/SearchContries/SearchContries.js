import React, { useState } from "react";
import { useLocation } from "wouter";
import iconSearch from "../../images/search-solid.svg";
import arrowBotton from "../../images/chevron-down-solid.svg";
import "./style.css";

function SearchContries(params) {
  const [contry, setContry] = useState();
  const [location, setLocation] = useLocation();

  const buscarContries = (evt) => {
    evt.preventDefault();
    setLocation(`/pais/${contry}`);
  };
  const obtenerValor = (evt) => {
    setContry(evt.target.value);
  };
  const obtenerRegion = (evt) => {
    if (evt.target.tagName === "P") {
      let value = evt.target.innerText;
      setLocation(`/region/${value}`);
    }
  };

  return (
    <div className="option-search">
      <form onSubmit={buscarContries} className="formSearch">
        <input
          type="text"
          placeholder="Search for a contry..."
          onChange={obtenerValor}
        />
        <img src={iconSearch} alt="icon-search" className="icon" />
      </form>
        <div className="select">
          <div className="select-disable">
            <p>Filter by Region</p>
            <button
              className="btn-select"
              onClick={() => {
                let contenedor = document.querySelector(".select-option");
                contenedor.classList.toggle("select-activo");
              }}
            >
              <img src={arrowBotton} alt="arrow-botton" className="icon" />
            </button>
          </div>
          <div className="select-option" onClick={obtenerRegion}>
            <p>Africa</p>
            <p>America</p>
            <p>Asia</p>
            <p>Europe</p>
            <p>Oceania</p>
          </div>
        </div>
    </div>
  );
}

export default SearchContries;
