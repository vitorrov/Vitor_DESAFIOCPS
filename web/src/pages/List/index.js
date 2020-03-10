import React, { Component } from 'react';

import { Container } from './styles';

import api from '../../services/api';

class List extends Component {
  state = {
    contacts: [],
  };

  // Executado assim que o componente aparece em tela
  async componentDidMount() {
    const token = localStorage.getItem('token');
    const btoken = `Bearer ${token}`;
    const contacts = await api.get('/listcontacts', {
      headers: { Authorization: btoken },
    });

    const response = contacts.data;

    this.setState({ contacts: response });

    console.log(token);
  }

  render() {
    const { contacts } = this.state;
    const name = localStorage.getItem('name');

    return (
      <>
        <h1>{`Bem-vindo ${name}`}</h1>
        <ul>
          {contacts.map(contact => (
            <Container key={contact.id}>
              <div className="contact">
                <h3>{`Nome: ${contact.name}`}</h3>
                <strong>{`Email: ${contact.email}`}</strong>
                <p>{contact.text}</p>
              </div>
            </Container>
          ))}
        </ul>
      </>
    );
  }
}

export default List;
