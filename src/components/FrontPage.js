import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mountainVideo from '../media/mountain.mp4';
import '../styles/frontPage.css';

const useStyles = makeStyles((theme) => ({
  frontPage: {
    height: '100vh',
    backgroundColor: '#000000e3'
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
    color: '#ff9de1',
    fontSize: 50
  },
  bigHeader: {
    fontVariant: 'small-caps',
    fontWeight: 300
  },
  smallHeader: {
    fontSize: 25,
    fontWeight: 300
  },
  divider: {
    color: 'grey'
  }
}));

const FrontPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.frontPage}>
      <video className={classes.video} controls={false} autoPlay loop muted>
        <source src={mountainVideo} type="video/mp4" />
      </video>
      <div className={classes.overlay} id="frontPage-overlay">
        <h1 className={classes.bigHeader} id="frontPage-bigHeader">The Digital Labs</h1>
        <h2 className={classes.smallHeader} id="frontPage-smallHeader">SOFTWARE <span className={classes.divider}>|</span> PRODUCTIONS <span className={classes.divider}>|</span> ART</h2>
      </div>
    </div>
  );
}
export default FrontPage;