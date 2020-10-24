import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import pinkImg from '../media/pink.jpg';

const useStyles = makeStyles((theme) => ({
  mission: {
    minHeight: '100vh',
    border: '4px pink solid',
    padding: '0px 0px 200px 0px',
    fontFamily: 'Roboto',
    backgroundColor: '#0c0c0c'
  },
  missionBanner: {
    backgroundImage: `url(${pinkImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 115,
    padding: 50,
    textAlign: 'center',
    opacity: 0.9
  },
  missionBannerTitle: {
    color: 'white',
    backgroundColor: '#0c0c0c',
    padding: 30,
    margin: '0 auto',
    maxWidth: 800
  },
  missionContent: {
    padding: '200px 200px 200px 200px'
  },
  header: {
    fontSize: 60,
    color: 'white',
    textAlign: 'left',
    fontWeight: 600,
    fontVariant: 'all-small-caps',
    padding: 30
  },
  bodyHeader: {
    color: 'white',
    fontSize: 50
  },
  body: {
    color: '#f7daf3',
    fontSize: 30,
    fontWeight: 600
  },
  bodyInfo: {
    fontSize: 25,
    fontWeight: 300
  }
}));

const Mission = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.mission} id="mission"> 
      <div className={classes.missionBanner} id="mission-banner">
        <div className={classes.missionBannerTitle}>
          <Typography variant="h4">Mission Statement</Typography>
        </div>
      </div>
      <Grid container className={classes.missionContent}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Typography className={classes.bodyHeader}>We are The Digital Labs.</Typography>
          <br/>
          <Typography className={classes.body}>We Value: <span className={classes.bodyInfo}>Quality, respect and honesty.</span></Typography>
          <br/>
          <Typography className={classes.body}>We Donate: <span className={classes.bodyInfo}>1% of our profits to non-profit organizations.</span></Typography>
          <br/>
          <Typography className={classes.body}>We are International:<span className={classes.bodyInfo}> Remotely.</span></Typography>
          <br/>
          <Typography className={classes.body}>We are not Afraid:<span className={classes.bodyInfo}> To try new things.</span></Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          

        </Grid>
      </Grid>
    </div>
  );
}
export default Mission;