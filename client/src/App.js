import React, { Component } from 'react';
import axios from 'axios';
import { Stage, Layer, Rect } from 'react-konva';
// import Konva from 'konva';
import './App.css';

class App extends Component {
  // Initialize state
  state = {
    message: '',
    sensor: {},
    position: {
      x: 20,
      y: 20,
    },
    stop: false
  }

  // Fetch passwords after first mount
  componentDidMount() {
    this.newSensor();
  }

  newSensor = () => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        const sensor = {a: e.alpha, b: e.beta, g: e.gamma};
        if(this.state.stop !== true) {
          this.setState({sensor});
        }
      });
    }
  }

  startSensor = () => {
    this.setState({stop: false});
  }

  stopSensor = () => {
    this.setState({stop: true});
  }

  changePosition = () => {
    console.log(this.refs.redSquare, 'position');
  }

  getHi = () => {
   // Get the passwords and store them in state
    axios.get('/api/hi')
     .then(res => {
       this.setState({ message: res.data.message })
      }
    );
  }

  handleClick = () => {
    console.log('weaaa');
  };

  render() {
    const { sensor, position, stop } = this.state;
    return (
      <div className="App">
        <h1>welcome gyroscope</h1>
        <p>{JSON.stringify(sensor)}</p>
        <button onClick={() => { (stop) ? this.startSensor() : this.stopSensor() }}>
        {
          (stop) ? 'go' : 'stop'
        }
        </button>
      </div>
    );
  }
}

export default App;
