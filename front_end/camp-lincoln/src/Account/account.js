import React from 'react';
import {Container,Card, Grid, CardContent, Paper, Divider, Button, ButtonGroup} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));





export default function Account(){

  const classes = useStyles();
  return(
    <div>
    <br />
    <br/>
    <Container>
      <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      spacing={3}>
        <Grid
        item md={3}>
          <Card>
            <CardContent>
                <Container>
                  <Avatar className={classes.large} />
                  <h1>User 1</h1>
                  </Container>
            </CardContent>
          </Card>

        </Grid>
        <Grid
        item xs>
          <Paper>
            <Card>
              <CardContent>
                  <h2>Profile Content</h2>
                  <p>Name: </p>
                  <Divider/>
                  <ButtonGroup>
                    <Button>Schedule</Button>
                    <Button>Change UserName/Password</Button>
                    
                  </ButtonGroup>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
  )
}