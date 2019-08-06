import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardsContainer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      triviaQuestions: []
    }
  }

  componentDidMount() {
    fetch('http://jservice.io/api/clues')
      .then(response => response.json())
      .then(triviaQuestions => this.setState({ triviaQuestions }));
  }

  render() {

    return (
      <div className="App">

        <CardContainer questions={this.state.triviaQuestions}/>
        <Navbar />

      </div>
    );
  }
}

export default App;
