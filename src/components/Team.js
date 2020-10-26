import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import chris from '../media/chris1.jpg';
import sylvia from '../media/sylvia1.jpg';
import taj from '../media/taj.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/team.css';

const useStyles = makeStyles((theme) => ({
  team: {
    minHeight: '100vh',
    border: '4px pink solid',
    fontFamily: 'Roboto',
    backgroundColor: '#0c0c0c'
  },
  teamContent: {
    padding: '150px 400px 250px 400px'
  },
  header: {
    fontSize: 70,
    color: 'white',
    textAlign: 'left',
    fontWeight: 600,
    fontVariant: 'all-small-caps',
    padding: '30px 30px 30px 0px'
  },
  profileCard: {
    marginTop: 100
  },
  profileImg: {
    width: '85%',
    borderRadius: 5,
    boxShadow: '5px 0px 80px rgb(84 59 84 / 37%), 0 0px 10px rgb(84 59 84 / 37%)'
  },
  profileName: {
    fontSize: 40,
    color: 'white',
    textAlign: 'left',
    fontWeight: 300,
    padding: '0px 30px 0px 0px'
  },
  profileTitle: {
    fontSize: 26,
    color: '#8cfdfd',
    textAlign: 'left',
    fontWeight: 600,
    padding: '15px 30px 10px 0px'
  },
  profileDescription: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    fontWeight: 300,
    padding: '30px 30px 30px 0px'
  },
  profileDivider: {

  },
  profileIcons: {
    color: '#f0b2f1',
    float: 'right',
    margin: 10,
    display: 'inline-grid'
  },
  profileIcon: {
    margin: '5px 10px 5px 10px',
    fontSize: 25
  }
}));

const Team = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.team} id="team">
      <Grid container className={classes.teamContent} id="team-content">

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.header}>Our Team</Typography>
        </Grid>

        <Grid className={classes.profileCard} item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={3} lg={4} md={12} sm={12} xs={12}>
              <img className={classes.profileImg} src={chris} alt="chris-eddy"/>
            </Grid>
            <Grid item xl={9} lg={8} md={12} sm={12} xs={12}>
              <Typography className={classes.profileName}>Chris Eddy (Rookie Bleu)</Typography>
              <Typography className={classes.profileTitle}>CEO | Web Engineer | Creator</Typography>
              <div className={classes.profileIcons}>
                <LinkedInIcon className={classes.profileIcon}/>
                <InstagramIcon className={classes.profileIcon}/>
                <TwitterIcon className={classes.profileIcon}/>
                <GitHubIcon className={classes.profileIcon}/>
              </div>
              <hr className={classes.profileDivider}/>
              <Typography className={classes.profileDescription}>
                Hercules (/ˈhɜːrkjuliːz, -jə-/) is a Roman hero and god. He is the Roman equivalent of the Greek divine hero Heracles, who is the son of Zeus (Roman equivalent Jupiter) and the mortal Alcmene. In classical mythology, Hercules is famous for his strength and for his numerous far-ranging adventures.
The Romans adapted the Greek hero's iconography and myths for their literature and art under the name Hercules.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.profileCard} item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={3} lg={4} md={12} sm={12} xs={12}>
              <img className={classes.profileImg} src={sylvia} alt="sylvia"/>
            </Grid>
            <Grid item xl={9} lg={8} md={12} sm={12} xs={12}>
              <Typography className={classes.profileName}>Sylvia Makuch (Checkmeeeowt)</Typography>
              <Typography className={classes.profileTitle} style={{color: '#ffc0e3'}}>Digital Artist | Stylist | Creative</Typography>
              <div className={classes.profileIcons}>
                <LinkedInIcon className={classes.profileIcon}/>
                <InstagramIcon className={classes.profileIcon}/>
                <TwitterIcon className={classes.profileIcon}/>
                <GitHubIcon className={classes.profileIcon}/>
              </div>
              <hr className={classes.profileDivider}/>
              <Typography className={classes.profileDescription}>
                Helios, also Helius (/ˈhiːlioʊs/; Ancient Greek: Ἥλιος Hēlios; Latinized as Helius; Ἠέλιος in Homeric Greek), in ancient Greek religion and myth, is the god and personification of the Sun, often depicted in art with a radiant crown and driving a horse-drawn chariot through the sky. He was a guardian of oaths and also the god of sight.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.profileCard} item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={3} lg={4} md={12} sm={12} xs={12}>
              <img className={classes.profileImg} src={taj} alt="taj"/>
            </Grid>
            <Grid item xl={9} lg={8} md={12} sm={12} xs={12}>
              <Typography className={classes.profileName}>Taj Isiah</Typography>
              <Typography className={classes.profileTitle} style={{color: 'rgb(255 248 170)'}}>Videographer | Photographer | Productions</Typography>
              <div className={classes.profileIcons}>
                <LinkedInIcon className={classes.profileIcon}/>
                <InstagramIcon className={classes.profileIcon}/>
                <TwitterIcon className={classes.profileIcon}/>
                <GitHubIcon className={classes.profileIcon}/>
              </div>
              <hr className={classes.profileDivider}/>
              <Typography className={classes.profileDescription}>
                In Greek mythology, Kratos (or Cratos)[a] is the divine personification of strength. 
                He is the son of Pallas and Styx. Kratos and his siblings Nike ("Victory"), Bia ("Force"), and Zelus ("Zeal") are all essentially personifications of a trait.[5] Kratos is first mentioned alongside his siblings in Hesiod's Theogony. 
                According to Hesiod.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
export default Team;