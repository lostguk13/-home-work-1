import React, { useState, useEffect } from 'react'
import FeedBackForm from './components/ FeedBackForm'
import FeedBackList from './components/ FeedBackList'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useStyles from "./style";


const FeedBack = () => {
  const classes = useStyles();

  const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')) || [])

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  const addNewComment = (comment) => {
    console.log('cooment', comment)
    setComments(comments => [...comments, comment])
  }
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        {comments.length > 0 && <FeedBackList comments={comments} />}
        <FeedBackForm addNewComment={addNewComment} />
      </Box>
    </Container>

  )
}

export default FeedBack
