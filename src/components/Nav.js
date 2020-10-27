import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../media/logo.png';
import NavDrawer from './NavDrawer.js'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    position: 'fixed',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 30,
    marginRight: 15
  },
  contactBtn: {
    '&:hover': {
      borderColor: '#ff9de1'
    }
  }
}));

const Nav = (props) => {
  const classes = useStyles();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const scrollToSection = (item) => {
    let elem = null;
    switch(item) {
      case 'Our Mission': {
        elem = document.getElementById('mission');
        break;
      }
      case 'Services': {
        elem = document.getElementById('offering');
        break;
      }
      case 'Team': {
        elem = document.getElementById('team');
        break;
      }
      case 'Contact': {
        elem = document.getElementById('footer');
        break;
      }
      default: {
        break;
      }
    }
    window.scrollTo({
      top:  window.pageYOffset + elem.getBoundingClientRect().top - 70,
      behavior: 'smooth'
    });
    setDrawerVisible(false);
  }

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={(e) => setDrawerVisible(!drawerVisible)}>
            <MenuIcon />
          </IconButton>
          <img className={classes.logo} src={Logo} alt="logo" />
          <Typography variant="h6" className={classes.title}>
            The Digital Labs
          </Typography>
          <Button className={classes.contactBtn} variant="outlined" color="inherit" onClick={() => scrollToSection('Contact')}>Contact</Button>
        </Toolbar>
      </AppBar>
      <NavDrawer visible={drawerVisible} closeDrawer={() => setDrawerVisible(false)} scrollToSection={scrollToSection} />
    </div>
  );
}
export default Nav;