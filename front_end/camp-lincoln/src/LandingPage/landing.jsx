import React from "react";
import { Button, Container, Divider,Grid } from "@material-ui/core";

export default class LandingPage extends React.Component {
  render() {
    
    return (
      <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center">

        <Grid item>

        </Grid>
        <Divider />
        <Grid item>
          <div className="container-fluid">
            <div className="jumbotron" style={{height: '95vh'}}>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card" style={{margin: '5em', }}>
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
          </div>
          </Grid>
      </Grid>
    );
  }
}