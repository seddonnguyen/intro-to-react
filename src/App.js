import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      triviaQuestions: []
    }
  }

  render() {
    return (
      <div className="App">
        <p>hello world</p>
      </div>
    );
  }
}

export default App;
