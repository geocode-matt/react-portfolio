import React from 'react';

function Header(props) {
    return (
            <div className="navbar navbar-expand-lg">
                <div className="name-container col-lg-4">
                <a href="https://github.com/geocode-matt"><img src="https://img.icons8.com/fluent/48/000000/github.png" target="_blank" className="icon"/></a>
                <a href="https://www.linkedin.com/in/mlinden88/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" target="_blank" className="icon"/></a>
                <a className="navbar-brand header-name" href="./index.html">matt linden</a>
                </div>
                <div className="nav-container col-lg-4">
                    <a className="navbar-brand header-links" href="./html/projects2.html">about</a>
                    <a className="navbar-brand header-links" href="./html/projects2.html">projects</a>
                    <a className="navbar-brand header-links" href="./html/contact2.html">contact</a>
                    <a className="navbar-brand header-links" href="./html/contact2.html">resume</a>
                </div>
            </div>
    )
}

export default Header;