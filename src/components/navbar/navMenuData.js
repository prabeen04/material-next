import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import Dashboard from 'material-ui-icons/Dashboard';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

export const mailFolderListItems = (
  <div>
    <Link to='/'><ListItem button>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    </Link>
    <Link to='/pages'><ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Pages" />
    </ListItem></Link>
    <Link to='/forms'><ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Forms" />
    </ListItem></Link>
    <Link to='/list'> <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Lists" />
    </ListItem></Link>
    <Link to='/dialog'><ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Dialogs" />
    </ListItem></Link>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Charts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Tabs" />
    </ListItem>
  </div>
);