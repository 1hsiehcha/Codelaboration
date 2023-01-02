import { React, useState } from 'react';
import './projects.css';
import { Footer } from '../../components';
import ProjectContainer from './ProjectSample/ProjectContainer';
import ProjectViewMoreSection from './ProjectSample/ProjectViewMoreSection';
import Background from '../Background/Background';

/* Importing images for the "Proposed Image/Design" Section. */
// import { image1, image2 } from './imports.js';

const ListOfProjects = (props) => {
  return (
    <>
      <ProjectContainer
        initialize = {false} 
        name = {"Codelaboration"}
        founder = {"Sean Kim"}
        duration = {"3-6 months"}
        role = {"Frontend Web Developer"}
        complexity = {"Beginner"}
        commitment = {"4-8 hours a week"}
        skills = {"HTML5, CSS3, JavaScript (ES6+), React.js, Git"}
        availability = {true}
        description = {
          <>
            This project is meant to develop a fully responsive and a complex website.
            It is a great asset to know the use of Git as we work as a team.
            It is important to understand how responsive webpages work.
            You will continuously improve the User Interface of website using React.js.
          </>
        }
        img = {"N/A"}
        {...props}
      />
      <ProjectContainer 
        initialize = {false}
        name = {"Codelaboration"}
        founder = {"Sean Kim"}
        duration = {"3-6 months"}
        role = {"Backend Web Developer"}
        complexity = {"Intermediate"}
        commitment = {"5-10 hours a week"}
        skills = {"JavaScript (ES6+), Node.js, Express.js, Git"}
        availability = {true}
        description = {
          <>
            We need a developer who have some experience with Node and Express.
            It is a great asset to know the use of Git as we work as a team.
            You will employ a system to apply for projects internally rather than using Google Form.
          </>
        }
        img = {"N/A"}
        {...props}
      />
      <ProjectContainer
        initialize = {false}
        name = {"AdvanceNav"}
        founder = {"Leo Li"}
        duration = {"8-10 months"}
        role = {"General Software Developer"}
        complexity = {"Intermediate"}
        commitment = {"3 hours a week"}
        skills = {"C++, Git"}
        availability = {true}
        description = {
          <>
            This project is about developing the navigation feature of a Google Maps-like software
            that takes into consideration walking, driving, and transit.
            The applicant must be a 3rd year or higher university student in Computer Engineering,
            Computer Science, or a related program. Knowledge of C++ and Git are required.
            Knowledge of path-finding algorithms and previous experience in software development are assets.
          </>
        }
        img = {"N/A"}
        {...props}
      />
      <ProjectContainer
        initialize = {false}
        name = {"Speech Recognition AI"}
        founder = {"Leo Li"}
        duration = {"6-8 months"}
        role = {"Machine Learning Developer"}
        complexity = {"Expert"}
        commitment = {"4 hours a week"}
        skills = {"Python, Numpy, TensorFlow, Git"}
        availability = {true}
        description = {
          <>
            This project is about training a machine learning model to translate spoken French into text.
            Knowledge of Numpy and Tensorflow are required.
            Knowledge of Long Short-Term Memory (LSTM) Neural Networks and French are assets.
          </>
        }
        img = {"N/A"}
        {...props}
      />
    </>
  )
}

const Projects = () => {
  const [rightScreen, rightScreenUpdate] = useState(
    <>
      <ProjectViewMoreSection initialize = {true} />
    </>
  ); 

  return (
    <Background>
      <div className="projects section__padding">
        <h2>
          Projects
        </h2>
        <div className="projects__contents">
          <div className="projects__box">
            <ListOfProjects stateChange={rightScreenUpdate}/>
          </div>
          {rightScreen}
        </div>
      </div>
      <Footer />
    </Background>
  )
}

export default Projects;