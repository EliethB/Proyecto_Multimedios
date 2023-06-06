import React from "react";
import "../navbar.css";
import {FaBars, FaTimes, FaSearch, FaMusic } from "react-icons/fa";
import { useState ,useRef } from "react";

function Navbar() {
    const navRef = useRef();
    const [searchQuery, setSearchQuery] = useState('');
  
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    }
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      }
    
      const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Realizar búsqueda:", searchQuery);
        setSearchQuery('');
      }
  
    return (
      <header>
  <div className="logo">
                <FaMusic />
                <h3>Music</h3>
            </div>
        <nav ref={navRef}>
          <a href="#" className="nav__link">Principal</a>
          <a href="#" className="nav__link">Explorar</a>
          <a href="#" className="nav__link">Biblioteca</a>
          <form onSubmit={handleSearchSubmit} className="nav__search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Buscar"
              className="nav__search-input"
            />
            <button type="submit" className="nav__search-btn">
              <FaSearch />
            </button>
          </form>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          
        </nav>
  
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    );
}

export default Navbar;
