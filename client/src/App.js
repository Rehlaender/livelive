import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  // Initialize state
  state = {
    message: ''
  }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getHi();
  }

  getHi = () => {
   // Get the passwords and store them in state
    axios.get('/api/hi')
     .then(res => {
       this.setState({ message: res.data.message })
      }
     );
 }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <h1>{message} welcome livelive</h1>
      </div>
    );
  }
}

export default App;
