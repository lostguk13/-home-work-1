import React from 'react';

export default function AuthorizationForm() {
  let name;
  let password;

  const onChange = (e) => {
    if (e.target.value.length <= 0) alert(`Нужно заполнить поле ${e.target.placeholder}`)
    if (e.target.name == 'email' && e.target.value.length > 0 && e.target.value.indexOf('@') === -1) {
      alert("Email имеете не правильный формат, обязателун символ : @ ")
    }


  }
  const onSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value; // typechecks!
    const password = e.target.password.value;
    console.log({ email, password })
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onBlur={onChange} placeholder="E-mail" name="email" />
        <input type="password" onBlur={onChange} placeholder="Пароль" name="password" />
        <input type="submit" value="Отправить" />
      </form>
    </>
  );
}
