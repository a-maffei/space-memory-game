/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from '../utils';

const MAX_VISIBLE_CARDS = 2;

const PACES = {
    easy: 1500,
    medium: 1000,
    hard: 500,
    pro: 300,
};

const useGameLogic = (images, gamePace) => {
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const [score, setScore] = useState(0);
    const [isWin, setIsWin] = useState(false);

    const prepareCards = () => {
        const a = getFormedData(images);
        const b = getPairedPics(a);
        const c = addUniqueIds(b);
        const d = shuffleCards(c);
        setCards(d);
    };

    const flipCards = clickedCardID => {
        const flippedCards = cards.map(card => {
            if (card.uniqueId === clickedCardID) {
                card.isShown = true;
            }
            if (card.isShown) setVisibleCards(oldState => [...oldState, card.uniqueId]);
            return card;
        });

        setCards(flippedCards);
    };

    const onCardClick = clickedCardID => {
        if (visibleCards.length < MAX_VISIBLE_CARDS) {
            flipCards(clickedCardID);
        }
    };

    const updateScore = () => {
        setScore(oldScore => oldScore + 1);
    };

    const checkMatch = () => {
        const visible = cards.filter(card => visibleCards.indexOf(card.uniqueId) !== -1);

        const matched = visible[0].id === visible[1].id;

        const updatedCards = cards.map(card => {
            if (visibleCards.indexOf(card.uniqueId) !== -1) {
                card.isShown = false;
                card.isFound = matched;
                console.log(card.isFound);
            }
            return card;
        });

        setTimeout(() => {
            setCards(updatedCards);
            setVisibleCards([]);
            if (matched) updateScore();
        }, PACES[gamePace]);
    };

    useEffect(() => {
        if (images.length > 0) prepareCards();
    }, [images]);

    useEffect(() => {
        if (visibleCards.length >= MAX_VISIBLE_CARDS) {
            checkMatch();
        }
    }, [visibleCards]);

    useEffect(() => {
        if (images.length && score === images.length) {
            setIsWin(true);
        }
    }, [score]);

    return { cards, onCardClick, isWin };
};

export default useGameLogic;

/* // Shuffle the cards to "mess up" with their order
export const shuffleCards = cards => {
    let m = cards.length;
    let t;
    let i;

    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element
        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
    }

    return cards;
};

// Form a data object per image
export const getFormedData = data => {
    return data.map((pic, index) => ({
        id: index,
        url: pic.src.small,
        isShown: false,
        isFound: false,
    }));
};

// "Duplicate" every fetched image
export const getPairedPics = data => {
    return data.reduce((img, i) => img.concat(i, i), []); (callbackFn, initial value)
};

// Extend existing info with a uniqueId key
export const addUniqueIds = data => {
    return data.map((entry, i) => ({
        ...entry,
        uniqueId: i,
    }));
};
 */
