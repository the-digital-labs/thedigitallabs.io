import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../media/logo.jpg';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: 300,
    backgroundColor: '#160b19',
    color: 'white',
    fontFamily: 'Roboto',
    padding: 50
  },
  logo: {
    height: 65
  },
  logoTitle: {
    fontSize: 25,
  },
  copyright: {
    fontSize: 18,
    color: '#bd98ba'
  },
  contact: {
    fontSize: 30
  },
  contactIcon: {
    paddingRight: 15
  },
  email: {
    fontSize: 18,
    color: '#d69bd1 !important',
  },
  socialIcon: {
    paddingRight: 15
  },
  gridItem: {
    padding: 10
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container>
        <Grid item lg={4} md={4} sm={12} xs={12} className={classes.gridItem}>
          <img src={logo} className={classes.logo} alt="footer-logo" />
          <p className={classes.logoTitle}>The Digital Labs and Studios Inc.</p>
          <p className={classes.copyright}>Copyright &copy; 2020</p>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} className={classes.gridItem}>
          <p className={classes.contact}>Contact Us</p>
          <MailIcon className={classes.contactIcon} />
          <a className={classes.email} href="mailto:rookiebleu@thedigitallabs.io">rookiebleu@thedigitallabs.io</a>
          <br/>
          <br/>
          <PhoneIcon className={classes.contactIcon} />
          <a className={classes.email} href="tel:604-764-0869">604-764-0869</a>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} className={classes.gridItem}>
          <p className={classes.contact}>Socials</p>
          <TwitterIcon className={classes.socialIcon} />
          <a className={classes.email} href="https://twitter.com/TheDigitalLabs">Twitter</a>
          <br/>
          <br/>
          <LinkedInIcon className={classes.socialIcon} />
          <a className={classes.email} href="https://www.linkedin.com/company/the-digital-labs/">LinkedIn</a>
          <br/>
          <br/>
          <GitHubIcon className={classes.socialIcon} />
          <a className={classes.email} href="https://github.com/the-digital-labs">Github</a>
        </Grid>
      </Grid>
    </div>
  );
}
export default Footer;