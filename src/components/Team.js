import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  team: {
    height: '100vh',
    backgroundColor: '#000000e3'
  }
}));

const Team = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <p>klol</p>
    </div>
  );
}
export default Team;