import React from 'react';

function Header(props) {
    const {
        ResumeSelected,
        setResumeSelected,
        ContactSelected,
        setContactSelected,
        PortfolioSelected,
        setPortfolioSelected,
        AboutSelected,
        setAboutSelected,
      } = props;
    return (
            <div className="navbar navbar-expand-lg">
                <div className="name-container col-lg-4">
                <a href="https://github.com/geocode-matt"><img src="https://img.icons8.com/fluent/48/000000/github.png" target="_blank" className="icon"/></a>
                <a href="https://www.linkedin.com/in/mlinden88/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" target="_blank" className="icon"/></a>
                <a className="navbar-brand header-name" href="./index.html">matt linden</a>
                </div>

                <div className="nav-container col-lg-4">
                    <a className="navbar-brand header-links" href="#about"><span
                onClick={() => {
                  setAboutSelected(true);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(false);
                console.log("about selected");
                }}
              >
                about
              </span></a>
                    <a className="navbar-brand header-links" href="#portfolio"><span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(true);
                  setResumeSelected(false);
                console.log("portfolio selected");
                }}
              >
                portfolio
              </span></a>
                    <a className="navbar-brand header-links" href="#contact"><span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(true);
                  setPortfolioSelected(false);
                  setResumeSelected(false);
                console.log("contact selected");
                }}
              >
                contact
              </span></a>
                    <a className="navbar-brand header-links" href="#resume"><span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(true);
                console.log("resume selected");
                }}
              >
                resume
              </span></a>
                </div>
            </div>
    )
}

export default Header;