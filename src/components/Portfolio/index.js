import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import passwordGenerator from '../../assets/images/password-generatorv2.png';
import weatherDashboard from '../../assets/images/weather-dashboardv2.png';

function Portfolio () {  
  const projects = [
    {
    "id": 1,
    "name": "Random Password Generator",
    "image": passwordGenerator,
    "github": "https://github.com/geocode-matt/password-generator",
    "topics": "JavaScript, HTML, CSS"
    },
    {
    "id": 2,
    "name": "Weather Dashboard",
    "image": weatherDashboard,
    "github": "https://github.com/geocode-matt/Weather-Dashboard",
    "topics": "JavaScript, jQuery, HTML, CSS, Bootstrap, Moment, API"
    }
  ];

    return (
      <section className="projects">
        <hr></hr>
        
        <div className="row justify-content-center">
          <div className="col-10 projects-section">
          {projects.map((project) => (
          <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} topics={project.topics}/>
          ))}
        </div>  
        </div>
      </section>
    
    );
  }

export default Portfolio;
