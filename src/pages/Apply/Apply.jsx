import React from 'react';
import './apply.css';
import { Footer } from '../../components';
import Background from '../Background/Background';

const ApplyHeader = (props) => {
  return (
    <div className="apply__header">
      <h1>
        {props.children}
      </h1>
    </div>
  );
}

const ApplyForm = () => {
  return (
    <>
      <iframe 
        className = "responsive__frame" 
        title="Contact form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdpeg3YuPXdX_p7CPPq2el1BQPId_gxIu1CGjt01gEBOj1c0A/viewform?embedded=true"
        allowFullScreen
      >Loading…</iframe>
    </>
  );
}

const Apply = () => {
  return (
    <Background>
      <div className="apply section__padding">
        <ApplyHeader>
          Apply
        </ApplyHeader>
        <ApplyForm />
      </div>
      <Footer />
    </Background>
  )
}

export default Apply