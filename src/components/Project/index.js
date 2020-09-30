import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import passwordGenerator from '../../assets/images/password-generatorv2.png';
import weatherDashboard from '../../assets/images/weather-dashboardv2.png';

// Individual Card build-out using props
function ProjectCards(props) {
    return (
            <a className="tile-wrapper" href={props.github}><div className="project-tile">
                <h6 className="project-name">{props.name}</h6>
                <div className="project-img-container">
                  <img className="project-img" alt={props.name} src={props.image} />
                </div>
                <h6 className="project-blurb">{props.blurb}</h6>
                <h6 className="project-topics">{props.topics}</h6>
            </div></a>
      );
    };
  
  export default ProjectCards;