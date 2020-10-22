import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  frontPage: {
    height: '100vh',
  }
}));

const FrontPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.frontPage}>
      
    </div>
  );
}
export default FrontPage;