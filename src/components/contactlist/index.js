import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

const Container = styled('div')`
  margin-top: 0.5em;
`;

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
    };
  }

  render() {
    return (
      <Container>
        List Here
      </Container>
    );
  }

}

export default ContactList;
