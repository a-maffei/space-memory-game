import React from "react";
import PropTypes from "prop-types";
import useGetImages from "../../hooks/useGetImages";
import useGameLogic from "../../hooks/useGameLogic";
import { useState, useEffect } from "react";
import styles from "./Board.module.css";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import Result from "../Result/Result";

const Board = ({ gameOptions, restartGame }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(gameOptions);
  const { cards, onCardClick, isWin } = useGameLogic(
    images,
    gameOptions.currentPace
  );

  console.log("board", images);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);
  return (
    <div>
      <div>
        {isWin ? (
          <Result restartGame={restartGame} />
        ) : (
          <button
            className={`${styles.buttonboard} frosted`}
            onClick={restartGame}
          >
            Restart game
          </button>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <div className={`${styles.board}`}>
            {cards.map((card) => (
              <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;

Board.propTypes = {
  gameOptions: PropTypes.shape({
    currentCategory: PropTypes.string.isRequired,
    currentPace: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
  }),
  restartGame: PropTypes.func.isRequired,
};
