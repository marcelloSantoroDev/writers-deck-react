import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const defaultObject = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  state = { ...defaultObject };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form state={ this.state } onInputChange={ this.onInputChange } />
        <Card state={ this.state } />
      </div>
    );
  }
}

export default App;
