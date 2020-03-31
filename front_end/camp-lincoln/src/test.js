import React, { Component } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Test  extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      actvity: {}
    
    };
  }
    


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ actvity: res }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('http://localhost:3001/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
    

      
      render(){
        
        return(
          <div>
            <h1>Hello</h1>
           <h1> {this.state.actvity.camperid}</h1>
           <h1>{this.state.actvity.ageLimit}</h1>
          </div>

      )}
}

export default Test;
