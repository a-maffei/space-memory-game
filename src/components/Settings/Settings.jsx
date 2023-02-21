import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES, PACE, INITIAL_CARDS_COUNT } from '../../constants';
import styles from './Settings.module.css';
import RadioBox from '../RadioBox/RadioBox';
import Counter from '../Counter/Counter';

const Settings = ({ startGame }) => {
    const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0]);
    const [currentPace, setCurrentPace] = useState(PACE[0]);
    const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

    const gameStartHandler = () => {
        startGame({ currentCategory, currentPace, cardsCount });
    };

    return (
        <div className={`${styles.settings} frosted`}>
            <h2>Test your memory and explore the Universe.</h2>

            <h4>Choose a category:</h4>
            <div className={`${styles.setting}`}>
                {CATEGORIES.map(item => (
                    <RadioBox
                        key={item}
                        name={item}
                        selectedItem={currentCategory}
                        onChange={e => setCurrentCategory(e.target.value)}
                    />
                ))}
            </div>
            <h4>Decide the amount of cards:</h4>
            <div className={`${styles.setting}`}>
                <Counter cardsCount={cardsCount} onClick={setCardsCount} />
            </div>
            <h4>Set the pace:</h4>
            <div className={`${styles.setting}`}>
                {PACE.map(item => (
                    <RadioBox
                        key={item}
                        name={item}
                        selectedItem={currentPace}
                        onChange={e => setCurrentPace(e.target.value)}
                    />
                ))}
            </div>
            <button className={`${styles.button} frosted`} onClick={gameStartHandler}>
                Start
            </button>
        </div>
    );
};

export default Settings;

Settings.propTypes = {
    startGame: PropTypes.func.isRequired,
};
