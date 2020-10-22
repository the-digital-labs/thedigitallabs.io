import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mountainVideo from '../mountain.mp4';

const useStyles = makeStyles((theme) => ({
  frontPage: {
    height: '100vh',
  },
  video: {
    height: '100%',
    width: '100%',
    opacity: '60%',
    objectFit: 'cover',
  },
  overlay: {
    width: '100%',
    position: 'absolute',
    top: '40%',
    textAlign: 'center',
    color: '#ffadbb',
    fontSize: 50
  },
}));

const FrontPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.frontPage}>
      <video className={classes.video} controls={false} autoPlay loop muted>
        <source src={mountainVideo} type="video/mp4" />
      </video>
      <div className={classes.overlay}>
        <h1>The Digital Labs</h1>
      </div>
    </div>
  );
}
export default FrontPage;