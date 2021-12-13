import React from "react";
import iconLight from "../../images/moon-regular.svg";
import iconDark from "../../images/moon-solid.svg";

function Header() {
  const SelectMode = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
  };
  return (
    <header className="contenedor contenedorHeader">
      <h1>Where in the world?</h1>
      <div className="switch" onClick={SelectMode}>
        <img src={iconLight} alt="" className="icon icon-light" />
        <img src={iconDark} alt="" className="icon icon-dark" />
        <span>Dark Mode</span>
      </div>
    </header>
  );
}

export default Header;
