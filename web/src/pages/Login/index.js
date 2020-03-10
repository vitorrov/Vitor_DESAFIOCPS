import React, { Component } from 'react';

import { Container, SubmitButton, Form } from './styles';

import api from '../../services/api';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    const response = await api.post('/adminlogin', {
      email,
      password,
    });

    const { user } = response.data;
    const { token } = response.data.user.token;

    localStorage.setItem('token', token);
    localStorage.setItem('name', user.name);

    this.props.history.push(`/listcontacts`);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleEmailChange}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <SubmitButton>Entrar</SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default Login;
