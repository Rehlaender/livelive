import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  // Initialize state
  state = {
    message: '',
    sensor: {}
  }

  // Fetch passwords after first mount
  componentDidMount() {
    this.newSensor();
  }

  newSensor = () => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        const sensor = {a: e.alpha, b: e.beta, g: e.gamma};
        this.setState({sensor});
      });
    }
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
    const { sensor } = this.state;

    return (
      <div className="App">
        <h1>welcome gyroscope</h1>
        <p>{JSON.stringify(sensor)}</p>
      </div>
    );
  }
}

export default App;
