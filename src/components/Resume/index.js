import React from 'react';

function Resume(props) {
    return (
        <section className="resume">
        <hr></hr>
        <br></br><br></br>
        <div className="row justify-content-center">
          <div className="col-10" id="resume-section">
              <div className="text-block">
              <div className="">
                <br></br><br></br>
                <a href="https://github.com/geocode-matt/react-portfolio/raw/master/src/assets/images/Linden_Resume.pdf" className="link"><span className="resume-span">download resume</span></a>
                <br></br><br></br>
                <p className="linkedin-icon">
                <a href="https://www.linkedin.com/in/mlinden88/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Linden LinkedIn"/></a>
                </p>
            </div>
              </div>
              <br></br><br></br>
        </div>
        </div>
      </section>
    )
}

export default Resume;