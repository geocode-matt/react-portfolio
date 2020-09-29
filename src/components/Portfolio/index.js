// import React, {Component} from 'react';

// export default class Porfolio extends Component {
//   render() {
//     return (
//       <section className="portfolio">
//       <hr></hr>
      
//       <div className="projects">
//         <ul>
//           <li>
//           <a href="">
//                 Password Generator
//                 <br />
//                 <img src="" alt="" height="175px" className="app-img" />
//               </a>
//               <p>Random password generator.</p>
//           </li>
//         </ul>
//       </div>
//     </section>
//     )
//   } 
// }


import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>
          <div className="project">
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} topics={project.topics}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;