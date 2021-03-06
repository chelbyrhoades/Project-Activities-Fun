import React from "react";
import { Button, Container, Divider,Grid } from "@material-ui/core";
import {Link} from 'react-router-dom';
import CampLogo from './Camp_Badge.png';

export default class LandingPage extends React.Component {
  render() {
    
    return (
      <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center">

        <Grid item>
        <img src={CampLogo} style={{height: '19em', width: '19em', float: 'left', marginTop: '5em'}} alt='camplogo' />
        </Grid>
        <Divider />
        <Grid item>
          <h1>To get started, Click below</h1>
          <Button varaint="outlined"><Link to="/account">Click Me</Link></Button>
          {/*
          <div className="container-fluid">
            
            
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card" style={{margin: '5em', marginTop: '1em'}}>
                    <div className="card-header" style={{ textAlign: "center" }}>
                      Welcome!
                    </div>
                    <div className="card-body">
                      <div className="form-group row" style={{margin: '3em'}}>
                          <label
                            for="username"
                            className="col-md-6 col-form-label text-md-right"
                          >
                            Username
                          </label>
                          <div className="col-md-10">
                            <input
                              type="username"
                              id="username"
                              className="form-control"
                              name="username"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="form-group row" style={{margin: '3em'}}>

                        <label
                          for="password"
                          className="col-md-6 col-form-label text-md-right"
                        >
                          Password
                        </label>
                        <div className="col-md-10">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            required
                          />
                        </div>

                        <div className="form-group row" style={{margin: '3em'}}>
                          <Container>
                            <Button variant="outlined" >Login</Button>
                          </Container>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          */}
          </Grid>
      </Grid>
    );
  }
}