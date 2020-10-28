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
    padding: '30px 30px 50px 0px'
  },
  profileCard: {
    marginBottom: 100
  },
  profileImg: {
    width: '85%',
    borderRadius: 5,
    boxShadow: '5px 0px 80px rgb(84 59 84 / 37%), 0 0px 10px rgb(84 59 84 / 37%)',
    marginBottom: 20
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
    float: 'right',
    margin: 20,
    display: 'inline-grid'
  },
  profileIcon: {
    padding: '8px 10px 8px 10px',
    fontSize: 25,
    color: '#f2bff3',
    '&:hover': {
      color: 'white',
    }
  }
}));

const Team = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.team} id="team">
      <Grid container className={classes.teamContent} id="team-content">

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.header + ' team-header'}>Our Team</Typography>
        </Grid>

        <Grid className={classes.profileCard + ' team-profile'} item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={3} lg={4} md={12} sm={12} xs={12} style={{ paddingBottom: 20 }}>
              <img className={classes.profileImg + ' team-profile-image'} src={chris} alt="chris-eddy"/>
            </Grid>
            <Grid item xl={9} lg={8} md={12} sm={12} xs={12}>
              <Typography className={classes.profileName + ' team-profile-name'}>Chris Eddy (Rookie Bleu)</Typography>
              <Typography className={classes.profileTitle + ' team-profile-title'}>CEO | Web Engineer | Creator</Typography>
              <div className={classes.profileIcons}>
                <a className={classes.profileIcon} href="https://www.linkedin.com/in/chris-eddy-394784160/" target="__blank">
                  <LinkedInIcon />
                </a>
                <a className={classes.profileIcon} href="https://www.instagram.com/rookie.bleu/" target="__blank">
                  <InstagramIcon />
                </a>
                <a className={classes.profileIcon} href="https://twitter.com/RookieBleu" target="__blank">
                  <TwitterIcon />
                </a>
                <a className={classes.profileIcon} href="https://github.com/ChrisEddy" target="__blank">
                  <GitHubIcon />
                </a>
              </div>
              <hr className={classes.profileDivider}/>
              <Typography className={classes.profileDescription + ' team-profile-description'}>              
                Chris is a "Senior / Lead / Rockstar / 10x" Software Engineer with 5 years of professional development experience. 
                A fullstack JavaScript developer. React, Node.js, HTML, CSS, databases and AWS are some of his key skills.
                Chris has a proven track record of delivering exceptional software at startup and enterprise levels.
                He is dedicated to the art and craft of software engineering. Seeking the highest forms of quality and user experience.
                Never afraid to work hard and push the boundaries of what is possible. 
                A natural leader, determined and ambitious, Chris started off his journey in programming at age 19 and at age 25 founded: "The Digital Labs".
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.profileCard + ' team-profile'} item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={3} lg={4} md={12} sm={12} xs={12}>
              <img className={classes.profileImg + ' team-profile-image'} src={sylvia} alt="sylvia"/>
            </Grid>
            <Grid item xl={9} lg={8} md={12} sm={12} xs={12}>
              <Typography className={classes.profileName + ' team-profile-name'}>Sylvia Makuch (Checkmeeeowt)</Typography>
              <Typography className={classes.profileTitle + ' team-profile-title'} style={{color: '#ffc0e3'}}>Digital Artist | Stylist | Creative</Typography>
              <div className={classes.profileIcons}>
                <a className={classes.profileIcon} href="https://www.linkedin.com/in/sylvia-makuch-6baa4a66/" target="__blank">
                  <LinkedInIcon />
                </a>
                <a className={classes.profileIcon} href="https://www.instagram.com/check.meeeowtt/" target="__blank">
                  <InstagramIcon />
                </a>
              </div>
              <hr className={classes.profileDivider}/>
              <Typography className={classes.profileDescription + ' team-profile-description'}>
                Sylvia has been a talented artist from birth. She has a natural eye for style, aesthetics and a passion for creating unique and professional art.
                She knew from a young age that fashion, art and design were her real passions and talents.
                Her favorite ways of creating are: Procreate on iPad Pro w/ Apple Pen, Adobe programs, real canvas watercolors, paint and easel and is starting to learn Blender.
                She does excellent interactive digital art with clients and can take your vision and make it reality on the canvas.
                She has a warm and caring approach to working with people and is a business woman to watch out for. 
                Currently, Sylvia works casual / part-time for The Digital Labs while attending 3D digital design / art school.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.profileCard + ' team-profile'} item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={3} lg={4} md={12} sm={12} xs={12}>
              <img className={classes.profileImg + ' team-profile-image'} src={taj} alt="taj"/>
            </Grid>
            <Grid item xl={9} lg={8} md={12} sm={12} xs={12}>
              <Typography className={classes.profileName + ' team-profile-name'}>Taj Isiah</Typography>
              <Typography className={classes.profileTitle + ' team-profile-title'} style={{color: 'rgb(255 248 170)'}}>Videographer | Photographer | Productions</Typography>
              <div className={classes.profileIcons}>
                <a className={classes.profileIcon} href="https://www.instagram.com/tajisiah/" target="__blank">
                  <InstagramIcon />
                </a>
              </div>
              <hr className={classes.profileDivider}/>
              <Typography className={classes.profileDescription + ' team-profile-description'}>
                Taj is a keen, steady and creative production specialist. He is skilled with gimbles, lighting, DSL cameras, editing photos and video, creating music videos, short films, Instagram shots, modeling and content creation.
                He brings a welcome hand to the creation and marketing process of any company. Taj is working on getting his pro level drone pilot license so that we can legally shoot in urban areas / weddings / crowded events. 
                Currently, Taj works part-time for The Digital Labs while he attends some film classes and is teaching himself advanced Adobe skills.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
export default Team;