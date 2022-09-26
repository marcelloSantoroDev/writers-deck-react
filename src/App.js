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
  savedCards: [],
};

class App extends React.Component {
  state = { ...defaultObject };

  onChangeButton = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const NINETY = 90;
    const TWO_HUNDRED_TEN = 210;
    const ATTRSUM = (+cardAttr1) + (+cardAttr2) + (+cardAttr3);
    if (cardName
      && cardDescription
      && cardImage
      && cardRare
      && cardAttr1 <= NINETY
      && cardAttr2 <= NINETY
      && cardAttr3 <= NINETY
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
      && ATTRSUM <= TWO_HUNDRED_TEN) {
      return true;
    }
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: !this.onChangeButton() });
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo };
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'Normal',
      savedCards: [...prev.savedCards, newCard],
    }));
  };

  render() {
    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ... this.state } />
      </div>
    );
  }
}

export default App;
