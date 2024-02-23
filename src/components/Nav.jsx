import React, { useState } from "react";

const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const burgerClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
       <div className="nav">
          <div className="burger-btn" onClick={burgerClick}>
            <svg width="50" height="50" viewBox="0 0 32 32"><path fill="#DCD7C9" d="M3 9h26a2 2 0 0 0 0-4H3a2 2 0 0 0 0 4ZM29 14H3a2 2 0 0 0 0 4h26a2 2 0 0 0 0-4ZM29 23H3a2 2 0 0 0 0 4h26a2 2 0 0 0 0-4Z"></path></svg>
          </div>
          <div className={`menu ${isMenuOpen ? "menuDisplay" : ""}`}>
            <ul>
              <li>Accueil</li>
              <li>Galerie</li>
              <li>Nos préstations</li>
              <li id="rdv">Prendre RDV</li>
            </ul>
          </div>
       </div>
    </>
  );
};

export default Nav;
