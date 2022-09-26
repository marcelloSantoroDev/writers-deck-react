import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { state } = this.props;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = state;
    return (
      <>
        <div>Card</div>
        <p data-testid="name-card">{cardName}</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </>
    );
  }
}
Card.propTypes = {
  state: PropTypes.shape({
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardDescription: PropTypes.string,
    cardImage: PropTypes.string,
    cardName: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  }).isRequired,
};
