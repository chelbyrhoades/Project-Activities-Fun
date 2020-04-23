import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Grid, Card, CardContent, AppBar, CardHeader, Typography, Divider, Button, Avatar} from '@material-ui/core';



export default function Account(){


  return(
    <div>
      <h1>Welcome Admin</h1>
      <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center">
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <img src="https://placeholder.com/" alt="Avatar" class="avatar" />
              <Divider/>
              <h3>Admin</h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Container>
            <Card>
              <CardContent>
               <Typography>
                 <h1>Title</h1>
               </Typography>
               <Divider />
               <Typography>
                 <h3>To assin/change Schedules</h3>
                 <Button><Link to="/table">Click here</Link></Button>
               </Typography>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}