import React from 'react';
import './home.css';
import { Footer } from '../../components';
import Background from '../Background/Background';

const HomeTitle = (props) => {
  return(
    <div className="home__title">
      <h1>
        {props.children}
      </h1>
    </div>
  );
}

const HomeDescription = (props) => {
  return (
    <div className="home__description">
      <p>
        {props.children}
      </p>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <Background>
        <div className="home section__padding">
          <HomeTitle>
            Build your team.
          </HomeTitle>

          <HomeDescription>
              Are you a developer looking for projects?<br/>
              Are you a project lead who needs members?<br/>
              Codelaboration is there for you!<br/><br />
              If you are new to this platform and is keen to learn more about how this platform operates, <br />
              please refer to the About Us page in the navigation menu. <br />
              Please feel free to contact us, if you have any outstanding questions left.
          </HomeDescription>
        </div>
        <Footer />
      </Background>
    </>
  )
}

export default Home