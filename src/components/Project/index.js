import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Card build-out using props
function ProjectCards(props) {
    return (
            <div className="project-tile">
                <img className="project-img" alt={props.name} src={props.image} />
            </div>
      );
    };
  
  export default ProjectCards;