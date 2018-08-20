import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.state.pixels = [
      {x: 10, y: 7, color: '#99CCCF'},
      {x: 11, y: 7, color: 'red'},
      {x: 14, y: 8, color: 'blue'}
    ]
  }
  fieldClicked(event){
    this.coordinateColor({
      x: Math.floor(event.clientX / 10),
      y: Math.floor(event.clientY / 10)
    });
  }
  // coordinateClicked({ x, y }){
  //   this.setState({
  //     currentPixel: { x, y }
  //   })
  //   console.log(x,y)
  //   this.coordinateColor();
  // }
  coordinateColor({x, y}){
    this.setState({
      pixels: this.state.pixels.concat(
        {
          x: x,
          y: y,
          color: 'pink'
        }
      )
    })
    console.log(x,y);
    console.log(this.state.pixels);
  }
  render() {
    return (
      <div className={'container'} onClick={this.fieldClicked.bind(this)}>
        {this.state.pixels.map(({x, y, color }) =>
        <div style={{
          backgroundColor: color,
          top: y*10,
          left: x*10,
          width: '10px',
          height: '10px',
          position: 'absolute'
        }}></div>
    )}
    </div>
    );
  }
}

export default App;
