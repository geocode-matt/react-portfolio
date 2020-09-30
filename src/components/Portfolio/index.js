import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import passwordGenerator from '../../assets/images/password-generatorv2.jpg';
import weatherDashboard from '../../assets/images/weather-dashboardv2.jpg';
import techBlog from '../../assets/images/tech-blog.jpg';
import noteTaker from '../../assets/images/note-taker.jpg';
import barkeep from '../../assets/images/barkeep.jpg';
import gameplanRealtyTeam from '../../assets/images/gameplan-realty-team.jpg';
import simpleSocial from '../../assets/images/simple-social.jpg';
import teamProfileGenerator from '../../assets/images/team-profile-generator.jpg';
import workDayScheduler from '../../assets/images/work-day-scheduler.jpg';

function Portfolio () {  
  const projects = [
    {
      "id": 1,
      "name": "Game Plan Realty Team",
      "image": gameplanRealtyTeam,
      "github": "https://gameplanrealty.com/",
      "blurb": "Website designed for Game Plan Realty Team",
      "topics": "[Wordpress, JavaScript, HTML, CSS]"
    },
    {
      "id": 2,
      "name": "Simple Social",
      "image": simpleSocial,
      "github": "https://github.com/tbreazier/full-stack-project",
      "blurb": "Socialize with your friends!",
      "topics": "JavaScript, HTML, CSS"
    },
    {
      "id": 3,
      "name": "BarKeep",
      "image": barkeep,
      "github": "https://github.com/jessicajernigan/team5-project-1",
      "blurb": "Thirsty? Find your cocktail of choice!",
      "topics": "JavaScript, HTML, CSS"
    },
    {
      "id": 4,
      "name": "Tech Blog",
      "image": techBlog,
      "github": "https://github.com/geocode-matt/Tech-Blog",
      "blurb": "A blog for technical discussion",
      "topics": "JavaScript, HTML, CSS, Bootstrap, Moment, Sequelize, Node.js, Handlebars.js, dotenv, bcrypt"
    },
    {
      "id": 5,
      "name": "Team Profile Generator",
      "image": teamProfileGenerator,
      "github": "https://github.com/geocode-matt/Team-Profile-Generator",
      "blurb": "New team? Quickly generate a team profile page",
      "topics": "JavaScript, HTML, CSS"
    },
    {
      "id": 6,
      "name": "Work Day Scheduler",
      "image": workDayScheduler,
      "github": "https://github.com/geocode-matt/WorkdayScheduler",
      "blurb": "A scheduling assistant for your work day",
      "topics": "JavaScript, HTML, CSS"
    },
    {
    "id": 7,
    "name": "Random Password Generator",
    "image": passwordGenerator,
    "github": "https://github.com/geocode-matt/password-generator",
    "blurb": "Quickly generate a random password",
    "topics": "JavaScript, HTML, CSS"
    },
    {
    "id": 8,
    "name": "Weather Dashboard",
    "image": weatherDashboard,
    "github": "https://github.com/geocode-matt/Weather-Dashboard",
    "blurb": "Travel plans? Check the weather first!",
    "topics": "JavaScript, jQuery, HTML, CSS, Bootstrap, Moment, API"
    },
    {
      "id": 9,
      "name": "Note Taker",
      "image": noteTaker,
      "github": "https://github.com/geocode-matt/Note-Taker",
      "blurb": "Keep track of your important notes",
      "topics": "JavaScript, HTML, CSS, Bootstrap, Moment, Sequelize, Node.js, Handlebars.js, dotenv, bcrypt"
    }
  ];

    return (
      <section className="projects">
        <hr></hr>
        
        <div className="row justify-content-center">
          <div className="col-10 projects-section">
          {projects.map((project) => (
          <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} blurb={project.blurb} topics={project.topics}/>
          ))}
        </div>  
        </div>
      </section>
    
    );
  }

export default Portfolio;
