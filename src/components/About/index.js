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
            <br></br>
            <p className="text-align-center text-title">
              About Me:
            </p>
            <p>
            Welcome to my portfolio page! I am a Full Stack Web Developer seeking employment in Web/Software Development in the Dallas-Fort Worth, Texas area. Please view my projects and resume and feel free to contact me!
            </p>
            <br></br>
          <p className="text-align-center text-title">
              My Background:
          </p>
          <p>
          A lifelong enjoyment of working with computers led me to the web development program through UT Austin. My original intent was to apply the skills gained to improve workflows and processes at the company I was working for. Economic hardships brought about by Covid-19 led to the collapse of my company but, refreshingly, has reignited my passion for programming and led me to the total dedication to becoming a full-time developer. My aspiration is to utilize the foundational technical and problem-solving skills I have developed during my ~10 years as a geoscientist and my recent full stack web development training to pursue a career in full stack web development.
          </p>
              </div>
        </div>  
        </div>
      </section>
    )
}

export default About;