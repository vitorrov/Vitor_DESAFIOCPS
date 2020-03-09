import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';

import api from '../../services/api';

import { Container, Textarea, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    name: '',
    email: '',
    text: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = async event => {
    // event.preventDefault();

    const { name, email, text } = this.state;

    const response = await api.post('/', {
      name,
      email,
      text,
    });

    console.log(response.data);
  };

  render() {
    const { name, email, text } = this.state;

    return (
      <>
        <Container>
          <img src={logo} alt="CPS" />
          <h1>Bem vindo(a) a Cloud Predictive Solution</h1>
          <hr />
          <p>EM BREVE UMA NOVA CPS</p>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={this.handleNameChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={this.handleEmailChange}
            />
            <Textarea
              placeholder="Sua mensagem"
              value={text}
              onChange={this.handleTextChange}
            />

            <SubmitButton>Enviar</SubmitButton>
          </Form>
        </Container>
      </>
    );
  }
}
