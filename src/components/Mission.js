import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import pinkImg from '../media/pink.jpg';
import vancouver from '../media/vancouver1.jpg';
import '../styles/mission.css';

const useStyles = makeStyles((theme) => ({
  mission: {
    minHeight: '100vh',
    border: '4px pink solid',
    fontFamily: 'Roboto',
    backgroundColor: '#0c0c0c'
  },
  missionBanner: {
    backgroundImage: `url(${pinkImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 45,
    padding: 50,
    textAlign: 'center',
    opacity: 0.9
  },
  missionBannerTitle: {
    color: 'white',
    backgroundColor: '#0c0c0c',
    padding: 35,
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
    fontWeight: 300,
    color: 'white'
  },
  vancouver: {
    height: 250,
    borderRadius: 5,
    width: '100%',
    maxWidth: 400
  },
  vancouverText: {
    color: 'white',
    paddingTop: 20,
    fontSize: 24
  },
}));

const Mission = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.mission} id="mission"> 
      <div className={classes.missionBanner} id="mission-banner">
        <div className={classes.missionBannerTitle} id="mission-banner-title">
          <Typography variant="h4">MISSION STATEMENT</Typography>
        </div>
      </div>
      <Grid container className={classes.missionContent} id="mission-content">
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
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
        <Grid item xl={6} lg={6} md={false} sm={false} xs={false}>

        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <br/>
          <br/>
          <hr />
          <br />
          <br />
          <img className={classes.vancouver} src={vancouver} alt="vancouver" />
          <Typography className={classes.vancouverText}>Founded on October 20th, 2020 in Vancouver, BC, Canada.</Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={false} sm={false} xs={false}>

        </Grid>
      </Grid>
    </div>
  );
}
export default Mission;