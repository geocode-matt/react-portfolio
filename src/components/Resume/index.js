import React from 'react';

function Resume(props) {
    return (
        <section className="resume">
        <hr></hr>
        
        <div className="row justify-content-center">
          <div className="col-10" id="resume-section">
              <div className="text-block">
              <div className="">
              Geoscientist and full stack Web Developer with over ten years of experience working as a geoscientist in the oil and gas industry. For more information please call or email me or check out my LinkedIn profile:  
                <br></br><br></br>
                <a href="https://github.com/geocode-matt/react-portfolio/raw/master/src/assets/images/Linden_Resume.pdf" className="link"><span className="resume-span">download resume</span></a>
                <br></br><br></br>
                <p className="linkedin-icon">
                <a href="https://www.linkedin.com/in/mlinden88/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Linden LinkedIn"/></a>
                </p>
            </div>
              </div>
              <br></br><br></br>
            <div className="text-block">
              Proficient with these languages and technologies:
            </div>
      <div className="technology-icon-container">
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-python-plain-wordmark"></i>
        <i className="devicon-html5-plain-wordmark colored"></i>
        <i className="devicon-css3-plain-wordmark colored"></i>
        <i className="devicon-bootstrap-plain-wordmark colored"></i>
        <i className="devicon-foundation-plain-wordmark colored"></i>
        <i className="devicon-visualstudio-plain colored"></i>
        <i className="devicon-git-plain colored"></i>
        <i className="devicon-github-plain-wordmark colored"></i>
        <i className="devicon-jquery-plain-wordmark colored"></i>
        <i className="devicon-handlebars-plain-wordmark colored"></i>
        <i className="devicon-mysql-plain-wordmark colored"></i>
        <i className="devicon-npm-original-wordmark colored"></i>
        <i className="devicon-sequelize-plain colored"></i>
        <i className="devicon-express-original colored"></i>
        <i className="devicon-heroku-original-wordmark colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-mongodb-plain-wordmark colored"></i>
        <i className="devicon-react-original-wordmark colored"></i>
        <i className="devicon-angularjs-plain colored"></i>
        <i className="devicon-wordpress-plain-wordmark colored"></i>
      </div>
        </div>
        </div>
      </section>
    )
}

export default Resume;