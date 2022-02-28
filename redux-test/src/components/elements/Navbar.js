import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
            <Link to="/" className="navbar-brand">
                Contact Address
            </Link>
            <div>
                <Link to="/contacts/addContact" className="btn btn-light ml-auto">Create Contact</Link>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
