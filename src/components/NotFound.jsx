import React, { Component } from 'react';
import Header from './Header';

class NotFound extends Component {
  componentDidMount() {
    document.title = 'Error | what to do?;';
  }
  render() {
    return (
      <div className="container">
        <haeder tagline="404- page not found!" />
        <div className="alert alert-warning">
          <strong>
            Ooops .... sorry!<br />
          </strong>
          The requested page could not be found.
        </div>
      </div>
    );
  }
}

export default NotFound;
