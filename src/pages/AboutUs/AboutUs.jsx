import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { Footer } from '../../components';
import { logo, SeanPic, AmirPic, CharlesPic } from './imports.js';
import Badge from 'react-bootstrap/Badge';
import Background from '../Background/Background';

const AboutUsTitle = (props) => {
  return(
    <div className="about-us__title">
      <h1>
        {props.children}
      </h1>
    </div>
  );
}

const AboutUsDescription = (props) => {
  return (
    <div className="about-us__description">
      <p>
        {props.children}
      </p>
    </div>
  );
}

const AboutUsDescriptionTeam = (props) => {
  return (
    <div className="about-us__description-team">
      {props.children}
    </div>
  );
}
 
const Member = (props) => {
  return (
    <div className="about-us__member">
      <p>
        {props.name}<br />
        <img src={props.image} alt=""/> <br />
        {props.role} <br/ >
        {props.discipline}
      </p>     
    </div>
  );
}

const AboutUs = () => {
  return (
    <Background>
      <div className="home section__padding">

        <AboutUsTitle>
          About Us
        </AboutUsTitle>

        <AboutUsDescription>
          Codelaboration is a society dedicated to supporting developers with a passion towards 
          starting projects but who are in need of new members with the same interests. 
          <br /><br />
          If you are interested in one of the listed projects and believe you are qualified, 
          you can either go directly to the Apply page by pressing 
          &nbsp; 
          <NavLink to="/Codelaboration/apply" className=".about-us__link" onClick={() => window.scrollTo(0, 0)}>
            <Badge bg="success">Apply Here </Badge>
          </NavLink>!
          <br /><br />
          If you are a project founder who wishes to recruit talented programmers, consider listing your 
          project on our website by contacting us either through the Apply page, our Instagram 
          page, or Email!
          <br /><br />
          Below is the team who has been designing, developing, and maintaining this website:
        </AboutUsDescription>
        <AboutUsDescriptionTeam>
          <Member name="Sean Kim" image={SeanPic} role="Head Web Developer" discipline="UofT ECE 2T5"/>
          <Member name="Charles Hsieh" image={CharlesPic} role="Vice Head Web Developer" discipline="UofT ECE 2T5"/><br/>
          <Member name="Shannon Jones" image={logo} role="Head Designer" discipline="UofT ECE 2T5"/>
          <Member name="Amirreza Aazam" image={AmirPic} role="Web Developer" discipline="UofT ECE 2T5"/>
          <Member name="Leo Li" image={logo} role="Form Specialist" discipline="UofT ECE 2T4"/>
          <Member name="Aiden Chow" image={logo} role="Web Developer" discipline="UofT ECE 2T4"/>
        </AboutUsDescriptionTeam>
      </div>
      <Footer />
    </Background>
  )
}

export default AboutUs