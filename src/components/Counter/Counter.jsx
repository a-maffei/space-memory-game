import React from 'react';
import PropTypes, { number } from 'prop-types';
import './Counter.css';

const Counter = ({ cardsCount, onClick }) => {
    const STEP = 2;

    const handleIncrement = e => {
        e.preventDefault();
        const number = cardsCount + STEP;
        if (number <= 160) onClick(number);
    };

    const handleDecrement = e => {
        e.preventDefault();
        const number = cardsCount - STEP;
        if (number >= 2) onClick(number);
    };

    return (
        <div className="quantity">
            <button className="minus" onClick={handleDecrement}>
                -
            </button>
            <span className="quantity">{cardsCount}</span>
            <button className="plus" onClick={handleIncrement}>
                +
            </button>
        </div>
    );
};

export default Counter;

Counter.propTypes = {
    cardsCount: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};
