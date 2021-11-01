import React, { useState, useEffect } from 'react'
import FeedBackForm from './ FeedBackForm'
import FeedBackList from './ FeedBackList'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useStyles from "./style";


const FeedBack = () => {
  const classes = useStyles();
  const [comments, setComments] = useState([])

  useEffect(() => {
     setComments(JSON.parse(localStorage.getItem('comments')))
  }, [])

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  const addNewComment = (comment) => {
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
