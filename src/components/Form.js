import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { state, onInputChange } = this.props;
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
      onSaveButtonClick } = state;

    return (
      <>
        <label htmlFor="Nome">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
            id="Nome"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="Descricao">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
            id="Descricao"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="Attr1">
          Attr1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
            id="Attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="Attr2">
          Attr2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
            id="Attr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="Attr3">
          Attr3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
            id="Attr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="Imagem">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
            id="Imagem"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="Raridade">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            id="Raridade"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          Super Trunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
            id="super-trunfo "
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
  state: PropTypes.shape({
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardDescription: PropTypes.string,
    cardImage: PropTypes.string,
    cardName: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
    isSaveButtonDisabled: PropTypes.bool,
    onSaveButtonClick: PropTypes.func,
  }).isRequired,
};
