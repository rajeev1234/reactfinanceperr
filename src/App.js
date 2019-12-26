import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Greeting  from './greeting.js'
import Count from './count'
const axios = require('axios');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      fcount : ""
    };
  }


  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/res/`)
      .then(res => {
        this.setState({ count: res.data.count ,fcount: res.data.fcount});
      })
  }

  render() { 
    const greet= "Dashboard"
    return (
      <div className="App-header">
        <Greeting data={greet}/>
        <Count count={this.state.count} fcount= {this.state.fcount} />
      </div>
    );
  }
}
export default App;
