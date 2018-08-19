import React from 'react';

const Header = props => {
  return (
    <header>
      <h1>What To Do!</h1>
      <p className="tagline">{props.tagline}</p>
    </header>
  );
};

export default Header;
