import React, { Component } from 'react';
import Form from '../Form/Form.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
       stateData: [],
       location: '',
    }
    this.addIdea = this.addIdea.bind(this);
  }

  addIdea = (newBewery) => {
    this.setState({ ideas: [...this.state.stateData, newBewery] });
    console.log(this.state)
  }

  render() {
    return(
        <main className="App">
          <Form addIdea={this.addIdea} />
        </main>
      )
  }

}

export default App;
