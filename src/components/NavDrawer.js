import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SportsMmaIcon from '@material-ui/icons/SportsMma';

const useStyles = makeStyles((theme) => ({
  drawer: {
    '& .MuiDrawer-paperAnchorLeft': {
      backgroundColor: '#212121',
      color: 'white',
      '& .MuiSvgIcon-root': {
        color: '#ff9de1'
      }
    }
  },
  list: {
    width: 250
  },
  navItem: {
    '&:hover': {
      color: '#ffd0f1'
    },
  }
}));

const listItems = [
  {
    text: 'Services',
    icon: <StorefrontIcon />
  },
  {
    text: 'Team',
    icon: <GroupIcon />
  },
  {
    text: 'Our Mission',
    icon: <SportsMmaIcon />
  },
  {
    text: 'Contact',
    icon: <ContactSupportIcon />
  },
]

const NavDrawer = (props) => {
  const classes = useStyles();

  return (
      <Drawer className={classes.drawer} anchor='left' open={props.visible} onClose={(e) => props.closeDrawer()}>
        <List className={classes.list}>
          {listItems.map((item, index) => (
            <ListItem className={classes.navItem} button key={item.text} onClick={() => props.scrollToSection(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}
export default NavDrawer;