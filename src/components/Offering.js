import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import webIcon from '../media/icons8-programming.svg';
import '../styles/offering.css';

const useStyles = makeStyles((theme) => ({
  offering: {
    minHeight: '100vh',
    border: '8px pink solid',
    padding: 200,
    fontFamily: 'Roboto',
    backgroundColor: '#0c0c0c'
  },
  header: {
    fontSize: 60,
    color: 'white',
  },
  paper: {
    height: 475,
    margin: 25,
    textAlign: 'center',
    backgroundColor: '#040404',
    padding: 50,
    border: '3px solid pink'
  },
  icon: {
    height: 250
  },
  cardHeader: {
    color: 'white',
    fontVariant: 'all-small-caps'
  },
  cardText: {
    color: '#f7eded',
    fontSize: 18
  },
  cardInfo: {
    textAlign: 'left',
  }
}));

const Offering = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.offering} id="offering">
      <Grid container>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={webIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Web Development</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText} variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={webIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Web Development</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText} variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={webIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Web Development</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText} variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={webIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Web Development</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText} variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={webIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Web Development</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText} variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={webIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Web Development</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText} variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Offering;