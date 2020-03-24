import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Test  extends Component{
  
    state = {
        data: [],
        id: 0,
        message: null,
        camperid: null,
        ageLimit: null,
        sizeLimit: null,
        banList: null,
        activityPeriod: null,
        intervalIsSet: false
       
      };


      componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
          let interval = setInterval(this.getDataFromDb, 1000);
          this.setState({ intervalIsSet: interval });
        }
      }

      componentWillUnmount() {
        if (this.state.intervalIsSet) {
          clearInterval(this.state.intervalIsSet);
          this.setState({ intervalIsSet: null });
        }
      }

      getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
      };

      render(){
        const { data } = this.state;
        return(
        <TableContainer>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>camperid</TableCell>
            <TableCell align="right">Age Limit</TableCell>
            <TableCell align="right">Size Limit</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Ban List</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {/*
          {data.map(data, index => (
            <TableRow key={data.id}>
              <TableCell component="th" scope="row">
                {data.camperid}
              </TableCell>
              <TableCell align="right">{data.ageLimit}</TableCell>
              <TableCell align="right">{data.sizeLimit}</TableCell>
              <TableCell align="right">{data.activityPeriod}</TableCell>
              <TableCell align="right">{data.banList}</TableCell>
            </TableRow>
          */}
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        

      )}
}

export default Test;
