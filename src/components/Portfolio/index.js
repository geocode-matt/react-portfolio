import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import employeeTracker from '../../assets/images/employee-tracker.png';
import weatherDashboard from '../../assets/images/weather-dashboardv2.jpg';
import techBlog from '../../assets/images/tech-blog-edit.png';
import noteTaker from '../../assets/images/note-taker-edit.png';
import socialNetworkApi from '../../assets/images/socialnetworkapi.JPG';
import ecommerceBackend from '../../assets/images/ecommercebackend.JPG';
import barkeep from '../../assets/images/barkeep-edit.png';
import gameplanRealtyTeam from '../../assets/images/gameplan-realty-team-edit.png';
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
      "topics": "Node.js, Express.js, Sequelize, Handlebars.js, Dotenv, Bcrypt, Node Fetch, Nodemailer, UI Avatar"
    },
    {
      "id": 3,
      "name": "BarKeep",
      "image": barkeep,
      "github": "https://github.com/jessicajernigan/team5-project-1",
      "blurb": "Thirsty? Find your cocktail of choice!",
      "topics": "JavaScript, HTML, CSS, TheCocktailDB API"
    },
    {
      "id": 4,
      "name": "Social Network API",
      "image": socialNetworkApi,
      "github": "https://github.com/geocode-matt/social-network-api",
      "blurb": "An API built for social networking",
      "topics": "Express.js, MongoDB, Mongoose, Moment.js"
    },
    {
      "id": 5,
      "name": "Tech Blog",
      "image": techBlog,
      "github": "https://github.com/geocode-matt/Tech-Blog",
      "blurb": "A blog for technical discussion",
      "topics": "JavaScript, HTML, CSS, Bootstrap, Moment.js, Sequelize, Node.js, Handlebars.js, dotenv, bcrypt"
    },
    {
      "id": 6,
      "name": "E-Commerce Backend",
      "image": ecommerceBackend,
      "github": "https://github.com/geocode-matt/e-commerce-backend",
      "blurb": "A backend built for an e-commerce site",
      "topics": "Node.js, Express.js, mySQL, Sequelize, dotenv, bcrypt"
    },
    {
      "id": 7,
      "name": "Team Profile Generator",
      "image": teamProfileGenerator,
      "github": "https://github.com/geocode-matt/Team-Profile-Generator",
      "blurb": "Quickly generate a profile page for your team",
      "topics": "Node.js, Inquirer, Jest, JavaScript, HTML, CSS"
    },
    {
      "id": 8,
      "name": "Work Day Scheduler",
      "image": workDayScheduler,
      "github": "https://github.com/geocode-matt/WorkdayScheduler",
      "blurb": "A scheduling assistant for your work day",
      "topics": "JavaScript, HTML, CSS"
    },
    {
    "id": 9,
    "name": "Employee Tracker",
    "image": employeeTracker,
    "github": "https://github.com/geocode-matt/employee-tracker",
    "blurb": "Easily keep track of your company employees",
    "topics": "Node.js, Inquirer, mySQL, ascii-art"
    },
    {
    "id": 10,
    "name": "Weather Dashboard",
    "image": weatherDashboard,
    "github": "https://github.com/geocode-matt/Weather-Dashboard",
    "blurb": "Travel plans? Check the weather first!",
    "topics": "JavaScript, jQuery, HTML, CSS, Bootstrap, Moment.js, API"
    },
    {
      "id": 11,
      "name": "Note Taker",
      "image": noteTaker,
      "github": "https://github.com/geocode-matt/Note-Taker",
      "blurb": "Keep track of your important notes",
      "topics": "Express.js, JavaScript, HTML, CSS"
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
