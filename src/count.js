
import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

class Count extends React.Component {
    constructor(props) {
        super(props);
      }

    
    render() {

    
      return <div style={{textAlign:"center", backgroundColor:"#add8e6",margin:"10%", marginRight:"80px"}}>
                <div className="row">
                    <div className="column">
                         <h1 style={{backgroundColor:"red"}}>Male</h1>
                             <p style={{color:"blue"}}>{this.props.fcount}</p>
                    </div>            
                 <div className="column">
                        <h1 style={{backgroundColor:"red"}}>Female</h1>
                        <p style={{color:"blue"}}>{this.props.count}</p>
  </div>
</div>
          {/* <h1 style={{backgroundColor:"red"}}>Male</h1>
          {this.props.fcount}
          <br />
          <h1 style={{backgroundColor:"red"}}>Female</h1>
          {this.props.count} */}
          </div>;
    }
  }
export default Count;