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
      onSaveButtonClick } = this.props;

    return (
      <>
        <label htmlFor="Nome">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
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
            id="Descricao"
            data-testid="description-input"
            name=""
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="Attr1">
          Attr1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
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
            name=""
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
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
