import React from 'react';

function About(props) {
    return (
        <section className="about">
        <hr></hr>
        
        <div className="row justify-content-center">
          <div className="col-10" id="about-section">
              <div className="about-writeup">
              
          <div className="ml-photo-container">
              <img className="ml-photo" src="https://raw.githubusercontent.com/geocode-matt/react-portfolio/master/src/assets/images/IMG_1909.jpg" alt="Matt Linden"/>
            </div>
            <p className="text-align-center text-title">
              About Me:
            </p>
            <p className="text-align-left">
            Welcome to my portfolio page! I am a Full Stack Web Developer and a recent graduate of the Full Stack Web Development Bootcamp at the University of Texas at Austin. 
            <br></br><br></br>
            A lifelong computer enthusiast with a recently reignited passion for programming, I am seeking employment as a web/software developer in the Dallas, Austin, or Houston, Texas areas. With significant experience working as a geoscientist in the energy industry, I possess a strong technical skillset and a track record of successful project management within multidisciplinary team envinronments. Please view my projects and resume and feel free to contact me!
            </p>
      <br></br>
        </div>
        </div>  
        </div>
        <p className="text-align-center text-title">
        Experience with these languages and technologies:
          </p>
      <div className="technology-icon-container">
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-python-plain-wordmark colored"></i>
        <i className="devicon-html5-plain-wordmark colored"></i>
        <i className="devicon-css3-plain-wordmark colored"></i>
        <i className="devicon-jquery-plain-wordmark colored"></i>
        <i className="devicon-bootstrap-plain-wordmark colored"></i>
        <i className="devicon-foundation-plain-wordmark colored blue"></i>
        <i className="devicon-visualstudio-plain colored"></i>
        <i className="devicon-github-plain-wordmark white"></i>
        <i className="devicon-handlebars-plain-wordmark white"></i>
        <i className="devicon-mysql-plain-wordmark colored blue"></i>
        <i className="devicon-npm-original-wordmark colored"></i>
        <i className="devicon-sequelize-plain colored blue"></i>
        <i className="devicon-express-original colored white"></i>
        <i className="devicon-heroku-original-wordmark colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-mongodb-plain-wordmark colored"></i>
        <i className="devicon-react-original-wordmark colored"></i>
        <i className="devicon-angularjs-plain colored"></i>
        <i className="devicon-wordpress-plain-wordmark white"></i>
      </div>
      <br></br><br></br><br></br>
      </section>
    )
}

export default About;