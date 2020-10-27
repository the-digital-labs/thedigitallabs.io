import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import '../styles/offering.css';
import webIcon from '../media/icons8-programming.svg';
import consultIcon from '../media/icons8-increase.svg';
import productIcon from '../media/icons8-flip-chart.svg';
import socialIcon from '../media/icons8-connect.svg';
import cameraIcon from '../media/icons8-slr-camera.svg';
import artIcon from '../media/icons8-drawing.svg';

const useStyles = makeStyles((theme) => ({
  offering: {
    minHeight: '100vh',
    border: '4px pink solid',
    padding: 200,
    fontFamily: 'Roboto',
    backgroundColor: '#0c0c0c'
  },
  header: {
    fontSize: 70,
    color: 'white',
    textAlign: 'left',
    fontWeight: 600,
    fontVariant: 'all-small-caps',
    padding: 30
  },
  paper: {
    minHeight: 475,
    margin: 25,
    textAlign: 'center',
    backgroundColor: '#040404',
    padding: '50px 50px 50px 50px',
    border: '3px solid pink'
  },
  icon: {
    height: 225,
    margin: 15
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
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.header + ' services-header'} variant="h2">Our Services</Typography>
        </Grid>
        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={webIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Web Engineering</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText + ' services-card-text'}>
                We offer a fully in-house fullstack Javascript development studio. 
                We can do Web Apps (React / Vanilla JS), Mobile Apps (React Native) and Desktop Apps (Electron).
                We offer our services with maintenance of existing apps as well as new projects. Enterprise, startups and everything in between are welcome.
                We do backend development in Node.js and AWS / Azure infrastructures. We also plan on getting into Cryptocurrency development services soon.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={consultIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Technology Consulting</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText + ' services-card-text'}>
                Sometimes you need a 3rd party opinion on the situation in your project. 
                We are able to come assess and provide consultations on where to improve development workflows for software engineering, web development and IT in general.
                We can help guide your business practices in your company as well as provide hiring assistance to find quality staff.
                Strategy, debate mediation and conflict resolution are also in our range of consult.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={productIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Product Development</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText + ' services-card-text'}>
                We can help you design, iterate and plan out the fundamentals of a real product.
                We can provide quality assurance, testing and code reviews from qualifed developers and creatives.
                We can do user interface, frontend and user experince mockups in Adobe XD / Figma.
                We offer rapid proto-typing of features, designs, systems, ideas, and visions of anything you can dream of.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={cameraIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Videography and Photography</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText + ' services-card-text'}>
                We offer promotional media services for your business. We can shoot and edit professional level photos and video.
                We can shoot aerial photography / video with our high quality DJI 4k drone.
                We can make music videos, take modeling shots, produce marketing material and whatever else you can imagine.
                Our team is expert with the Adobe Creative Cloud and owns high end production equipment.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={artIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Custom Digital Art</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText + ' services-card-text'}>
                We can create custom logos, branding, banners, icons, artwork, sketches, etc. 
                We have an in-house digital artist that uses: Procreate, Adobe Photoshop / Illustrator, Blender, iPad and other similar tools.
                We can do frequent demos of digital art progress through the power of remote work. 
                We can provide a more natural creative experience by prototyping / sketching with you in realtime through a screen share video call.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={6} md={12} sm={12} xs={12}>
          <Paper className={classes.paper + ' offering-card'} variant="outlined">
            <img src={socialIcon} alt="Web App Dev" className={classes.icon} />
            <Typography className={classes.cardHeader} variant="h4">Social Media Management</Typography>
            <hr />
            <br />
            <div className={classes.cardInfo}>
              <Typography className={classes.cardText + ' services-card-text'}>
                Successful social media is an art and a skill. Marketing and community outreach is also a important part of any business. We can help with content creation, frequent posting, administration, growing your audience, getting more likes, designing your vibe and more.
                We are pretty internet savvy and spend a lot of time creating, critiqing and designing new things for the internet in general.
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Offering;