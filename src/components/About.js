import React from 'react';
// import Fade from 'react-reveal/Fade';
import './About.css'; // Import the CSS file for styling

 export const About = () => {
  return (
    <div className="about-container">
      <bottom>
        <h2 className="about-title">About This App</h2>
        <p className="about-description">This is a simple Todo application built with React. It allows users to add, view, and delete tasks. The app helps you stay organized by keeping track of your todos.</p>
        <p className="about-features">The features include:</p>
        <ul className="features-list">
          <li>Adding new tasks</li>
          <li>Deleting tasks</li>
          <li>Viewing all tasks</li>
        </ul>
        <p className="about-footer">We hope this app helps you manage your daily tasks more efficiently!</p>
      </bottom>
    </div>
  );
};

export default About;
