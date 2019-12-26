
import React from 'react';
import logo from './logo.svg';
import './App.css';


class Greeting extends React.Component {
    constructor(props) {
        super(props);
      }
    
    render() {
      const greeting = `Welcome to ${this.props.data}`;
      return <div style={{textAlign:"center"}}>
          <h1>{greeting}</h1>
          </div>;
    }
  }
export default Greeting;