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
  isCheckBoxDisabled: false,
  areInputsDisabled: false,
  searchedItems: '',
  savedCards: [],
  savedCardsByName: [],
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
      hasTrunfo: true,
      cardTrunfo: false,
      isCheckBoxDisabled: true,
      savedCards: [...prev.savedCards, newCard],
    }));
  };

  onDeleteCard = (event) => {
    const { savedCards } = this.state;
    const valid = true;
    const notValid = false;
    const filterCards = savedCards
      .filter((element) => element.cardName !== event.target.name);
    this.setState({ savedCards: filterCards, hasTrunfo: valid ? notValid : true });
  };

  onDeleteCard2 = (event) => {
    const { savedCardsByName } = this.state;
    const valid = true;
    const notValid = false;
    const filterCards = savedCardsByName
      .filter((element) => element.cardName !== event.target.name);
    this.setState({ savedCards: filterCards, hasTrunfo: valid ? notValid : true });
  };

  onSearchInput = (event) => {
    const { savedCards } = this.state;
    const { value } = event.target;
    const filterCardsByName = savedCards
      .filter((element) => element.cardName.includes(value));
    this.setState({ savedCardsByName: value.length === 0 ? [] : filterCardsByName,
      searchedItems: value,
    });
  };

  onSelectInput = (event) => {
    const { savedCards } = this.state;
    const { value } = event.target;
    if (value !== 'todas') {
      const filterCardsByRarity = savedCards
        .filter((element) => element.cardRare === value);
      this.setState({ savedCardsByName: value.length === 0 ? [] : filterCardsByRarity,
        searchedItems: value });
    }
  };

  onCheckInput = (event) => {
    const { savedCards } = this.state;
    const { value } = event.target;
    if (event.target.checked === true) {
      const filterCardsByTrunfo = savedCards
        .filter((element) => element.cardTrunfo === 'on');
      this.setState({ savedCardsByName: value.length === 0 ? [] : filterCardsByTrunfo,
        searchedItems: value,
        areInputsDisabled: true,
      });
    }
  };

  render() {
    const {
      savedCards,
      savedCardsByName, searchedItems, areInputsDisabled } = this.state;
    const validateNameArray = searchedItems.length === 0;
    return (
      <div>
        <h1>Tryunfo!</h1>
        <label htmlFor="search-input">
          Escolha uma carta
          <input
            disabled={ areInputsDisabled }
            onChange={ this.onSearchInput }
            type="text"
            data-testid="name-filter"
            // value={ searchedItems }
          />
        </label>
        <label htmlFor="search-rare-input">
          <select
            disabled={ areInputsDisabled }
            onChange={ this.onSelectInput }
            data-testid="rare-filter"
            name=""
            id="search-rare-input"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="Super Trunfo">
          Super Trunfo
          <input
            id="Super Trunfo"
            data-testid="trunfo-filter"
            onClick={ this.onCheckInput }
            type="checkbox"
          />
        </label>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        { validateNameArray && savedCards.map((element, index) => (
          <div key={ index } className="div1">
            <Card key={ index } { ...element } />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ this.onDeleteCard }
              name={ element.cardName }
            >
              Excluir

            </button>
          </div>
        ))}
        { savedCardsByName.map((element, i) => (
          <div key={ i } className="div2">
            <Card key={ i } { ...element } />
            <button
              type="button"
              data-testid="delete-button"
              onChange={ this.onDeleteCard2 }
              name={ element.cardName }
            >
              Excluir

            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
