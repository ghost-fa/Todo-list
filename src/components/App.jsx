import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ToDoList />
      </div>
    );
  }
}

export default App;
