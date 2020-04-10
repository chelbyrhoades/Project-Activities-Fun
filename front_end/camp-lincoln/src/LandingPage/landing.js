import React,{Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './landing.css';
import badge from './Camp_Badge.png';


export default class Landing extends Component{

    constructor(props){
        super(props);
        

    }

      
    render(){
        return(        
            <React.Fragment>
                <CssBaseline />
                        <Typography component="div" >
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="center">

                                <Grid item>
                                    <img src={badge} alt="badge" />
                                </Grid>
                            
                                    <Divider orientation="vertical" variant="middle" style={{paddingTop: 500}} />
                                <Grid item>
                                    <h1 className="welcomeStatement">Camp Lincoln Management System</h1>
                                </Grid>
                               
                               
                                
                        </Grid>
                    </Typography>
                
            </React.Fragment>
        );
    }

   
     
}