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
                <a href="https://github.com/geocode-matt" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" className="icon"/></a>
                <a href="https://www.linkedin.com/in/mlinden88/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" className="icon"/></a>
                <a href="https://stackoverflow.com/users/14369920/matt-linden" target="_blank"><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt="Stack Overflow" className="icon"/></a>
                <a className="navbar-brand header-links header-name" href="#about"><span
                onClick={() => {
                  setAboutSelected(true);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(false);
                console.log("about selected");
                }}
              >
                matt linden
              </span></a>
                </div>

                <div className="nav-container col-lg-4">
                    <a className="navbar-brand header-links" href="#portfolio"><span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(true);
                  setResumeSelected(false);
                console.log("portfolio selected");
                }}
              >
                projects
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