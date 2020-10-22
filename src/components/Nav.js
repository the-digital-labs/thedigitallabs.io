import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../media/logo.jpg';

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
    marginRight: 25
  }
}));

const Nav = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img className={classes.logo} src={Logo} alt="logo" />
        <Typography variant="h6" className={classes.title}>
          The Digital Labs
        </Typography>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Nav;