import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from '@mui/material/Typography';

import useStyles from "./style";

const defaultValues = {
  fullName: "",
  email: "",
  createdAt: "",
  text: ""
};

const FeedBackForm = ({ addNewComment }) => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState(defaultValues);
  const [isSumit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    if (formValues.createdAt.length > 0) {
      addNewComment(formValues)
      setIsSubmit(false)
      setFormValues(defaultValues)
    }

  }, [formValues.createdAt])

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true
    if (formValues.fullName.length === 0) {
      alert("Заполните имя!")
      valid = false
    } else if (formValues.email.length === 0) {
      valid = false
      alert("Заполните  почту!")
    } else if (formValues.text.length === 0) {
      valid = false
      alert("Оставьте отзыв!")
    }
    if (valid) {
      setFormValues(prev => ({
        ...prev,
        'createdAt': new Date().toLocaleString(),
      }));

      setIsSubmit(true)
    }
  }

  return (
    <div className={classes.card}>
      <Typography className={classes.title} variant="h1" gutterBottom component="div">
        Обратная связь:
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          className={classes.textField}
          variant="outlined"
          id="name-input"
          name="fullName"
          label="Имя"
          type="text"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          id="email-input"
          name="email"
          label="Почта"
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          className={classes.textField}
          id="outlined-multiline-flexible"
          label="Текст..."
          multiline
          name="text"
          rows={4}
          value={formValues.text}
          onChange={handleInputChange}
        />
        <Button disabled={isSumit} className={classes.button} variant="contained" color="primary" type="submit" fullWidth>
          Отправить
        </Button>
      </form>
    </div>
  );
}

export default FeedBackForm
