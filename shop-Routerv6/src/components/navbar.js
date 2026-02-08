import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="navbar-brand mx-4 text-white">
        <FontAwesomeIcon icon={faShoppingCart} className="fas fa-lg" />
        <span className="badge badge-pill badge-info my-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        Items
      </div>
    </nav>
  );
};

export default NavBar;