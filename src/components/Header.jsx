import React, { Component, Fragment } from 'react';
class Header extends Component {
  render() {
    return (
      <Fragment>
        <h1>What To Do!</h1>
        <p className="tagline">This could be your bucket list.</p>
      </Fragment>
    );
  }
}

export default Header;
