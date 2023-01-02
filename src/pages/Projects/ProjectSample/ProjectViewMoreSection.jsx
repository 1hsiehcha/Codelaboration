import React from 'react';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import '../projects.css';

const ProjectSectionTemplate = (props) => {
  return (
    <>
      <div className="project__view-more">
        <div className="project__container-identifier">
          <h3>
            {props.name}
          </h3>

          <p>
            <span>Role: </span>
            &nbsp;
            {props.role}
          </p>

          <p>
            <span>Founder: </span>
            &nbsp;
            {props.founder}
          </p>

          <p>
            <span>Status: </span>
            &nbsp;
            <div className="project__container-status">
              {props.availability ? (
                <NavLink to="/Codelaboration/apply" className=".project__link" onClick={() => window.scrollTo(0, 0)}>
                  <Badge bg="success"><p>Apply Here</p></Badge>
                </NavLink>
              ) : (
                <Badge bg="danger">
                  Archived
                </Badge>
              )}
            </div>
          </p>
          
          <p>
            <span>Proposed Duration: </span>
            &nbsp;
            {props.duration}
          </p>

          <p>
            <span>Difficulty: </span>
            &nbsp;
            {props.complexity}
          </p>

          <p>
            <span>Time Commitment: </span>
            &nbsp;
            {props.commitment}
          </p>

          <p>
            <span>Preferable Skills: </span>
            &nbsp;
            {props.skills}
          </p>
        </div>

        <div className="project__container-description">
          <p>
            <span>Description: </span>
            {props.description}
          </p>
        </div>

        {props.img !== "N/A" && (
          <div className="project__container-slideshow">
            <p>
              <span>Proposed Images/Design:</span>
            </p>

            <div className="project__container-slideshow-styles">
              <Carousel indicators={true} indicatorLabels={[1]}>
                {props.img.map((each, index) =>
                  <Carousel.Item key={index}>
                    <img className="d-block w-100" src={each} alt="" />
                  </Carousel.Item>
                )}
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const ProjectViewMoreSection = (props) => {
    return (
      <>
        {props.initialize ? (
          <div className="project__view-more">
            <p>
              Please Click on the Title of the Project to View its Full Description
            </p>
          </div>

        ) : (
          <ProjectSectionTemplate {...props} />
        )}
      </>
    )
}

export default ProjectViewMoreSection;