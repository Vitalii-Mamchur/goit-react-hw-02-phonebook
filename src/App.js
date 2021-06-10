import React, { Component } from 'react';
import Toggle from './components/Toggle/Toggle';
import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
import SignUpForm from './components/SignUp/SignUp';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContacts = () => {};
  render() {
    return (
      <>
        <Toggle />
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Contacts />
        </Section>
        <SignUpForm />
      </>
    );
  }
}

export default App;
