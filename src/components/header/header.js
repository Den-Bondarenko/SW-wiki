import React from "react";
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">SW Wiki</div>
            <div className="menu">
                <a href="#">Persons</a>
                <a href="#">Planets</a>
                <a href="#">Starships</a>
            </div>
        </div>
    );
};

export default Header;