import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  offering: {
    height: '100vh',
  }
}));

const Offering = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.offering}>

    </div>
  );
}
export default Offering;