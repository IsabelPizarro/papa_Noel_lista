import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  marginLeft:390,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function ListWhist(props) {
 
  const {wishes}= props;
  const classes = useStyles();


  
  
  return (
    <List  className={classes.root} wishes={wishes}>
      {wishes.map(item => {
        const labelId = `checkbox-list-secondary-label-${item}`;
        return (
          <ListItem key={item} button>
            
              
            <ListItemText id={labelId} primary={item} />
            <ListItemSecondaryAction>
            
              <IconButton edge="end" aria-label="delete">
                      <DeleteIcon color="secondary" className={classes.margin}  />
                    </IconButton>
            </ListItemSecondaryAction>
            
          </ListItem>
        );
      })}
    </List>
  );
}

