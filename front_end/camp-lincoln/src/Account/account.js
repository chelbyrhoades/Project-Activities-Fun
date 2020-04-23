import React from 'react';
import {Grid, Container,Card,Avatar,Paper, CardContent, Typography} from '@material-ui/core';
import NavBar from '../Navbar/navbar'


export default function Account(){


  return(<div>
    <br/>
    <h2>Welcome User</h2>
    <br/>
    <Grid
    container
    direction="row"
    justify="space-evenly"
    alignItems="center"
    spacing={3}>
      <Grid item xs={2} >
        <Card variant="outlined">
          <CardContent>

          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Container>
          <Paper>Stuff</Paper>
        </Container>
      </Grid>
    </Grid>
  </div>)
}