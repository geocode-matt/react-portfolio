import React from 'react';

function Footer(props) {
    return (
            <div className="footer" id="footer">
                <hr></hr>
                <a href="https://github.com/geocode-matt" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Repository" className="icon"/></a>
                <a href="https://www.linkedin.com/in/mlinden88/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Repository" className="icon"/></a>
                <a href="https://stackoverflow.com/users/14369920/matt-linden" target="_blank"><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt="Stack Overflow" className="icon"/></a>
                <p>
                &copy; matt linden  |  <a href="mailto:mlindenx@gmail.com" className="link">email me</a>  |  <a href="tel:817-575-9370" className="link">call me</a>  |  <a href="" className="link">download resume</a>
                </p>
            </div>
    )
}

export default Footer;


