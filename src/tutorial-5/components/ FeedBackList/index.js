import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

import useStyles from "./style";

const FeedBackList = ({ comments }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Typography variant="h6" gutterBottom component="div">
        Отзывы:
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {comments && comments.map(item => (
          item['text'] && <ListItem key={item.createdAt}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <div>
              <ListItemText primary={item.fullName} secondary={item.text} />
              {item.createdAt && <span className={classes.date}>Дата отзыва: {item.createdAt}</span>}
            </div>
          </ListItem>
        ))
        }
      </List>
    </div>
  )
}

export default FeedBackList
