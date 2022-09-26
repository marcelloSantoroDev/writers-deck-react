import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <>
        <label htmlFor="cardName">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
            id="cardName"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
            id="cardDescription"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
            id="cardAttr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="cardAttr2">
          Attr2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
            id="cardAttr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
            id="cardAttr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
            id="cardImage"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="cardRare">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          Super Trunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
            id="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar

        </button>
      </>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
