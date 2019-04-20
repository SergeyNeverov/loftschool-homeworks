/* eslint-disable max-statements */
import React from 'react';
import bond from './assets/bond_approve.jpg';
import './Form.css';

export default class Form extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    firstnameError: '',
    lastnameError: '',
    passwordError: '',
    loggedIn: false
  };

  submitForm = e => {
    e.preventDefault();
    const { firstname, lastname, password } = this.state;
    if (firstname === 'james' && lastname === 'bond' && password === '007') {
      this.setState({
        loggedIn: true,
        firstnameError: '',
        lastnameError: '',
        passwordError: ''
      });
    } else {
      if (firstname === '') {
        this.setState({ firstnameError: 'Нужно указать имя' });
      } else if (firstname !== 'james') {
        this.setState({
          firstnameError: 'Имя указано не верно'
        });
      }
      if (lastname === '') {
        this.setState({
          lastnameError: 'Нужно указать фамилию'
        });
      } else if (lastname !== 'bond') {
        this.setState({
          lastnameError: 'Фамилия указана не верно'
        });
      }
      if (password === '') {
        this.setState({ passwordError: 'Нужно указать пароль' });
      } else if (password !== '007') {
        this.setState({
          passwordError: 'Пароль указан не верно'
        });
      }
    }
  };

  formData = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
      firstnameError: '',
      lastnameError: '',
      passwordError: ''
    });
  };

  render() {
    const {
      firstname,
      lastname,
      password,
      firstnameError,
      lastnameError,
      passwordError,
      loggedIn
    } = this.state;
    return (
      <div className="app-container">
        {loggedIn ? (
          <img src={bond} className="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.submitForm}>
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                className="field__input field-input t-input-firstname"
                type="text"
                name="firstname"
                value={firstname}
                onChange={this.formData}
              />
              <span className="field__error field-error t-error-firstname">
                {firstnameError}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                className="field__input field-input t-input-lastname"
                type="text"
                name="lastname"
                value={lastname}
                onChange={this.formData}
              />
              <span className="field__error field-error t-error-lastname">
                {lastnameError}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input
                className="field__input field-input t-input-password"
                type="password"
                name="password"
                value={password}
                onChange={this.formData}
              />
              <span className="field__error field-error t-error-password">
                {passwordError}
              </span>
            </p>
            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}
