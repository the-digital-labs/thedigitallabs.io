import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  team: {
    minHeight: '100vh',
    border: '4px pink solid',
    fontFamily: 'Roboto',
    backgroundColor: '#0c0c0c'
  }
}));

const Team = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.team} id="team">
      <Grid container className={classes.missionContent} id="mission-content">
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>

        </Grid>
      </Grid>
    </div>
  );
}
export default Team;