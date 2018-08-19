import React, { Component } from 'react';
import Header from './Header';

class Help extends Component {
  componentDidMount() {
    document.title = 'Help | What to do?';
  }
  render() {
    return (
      <div className="container">
        <Header tagline="Your questions will be answered here." />
        <ul>
          <li>Where is the data stored?</li>
          <li>We store all information in your browser's LocalStorage.</li>
        </ul>
      </div>
    );
  }
}

export default Help;
