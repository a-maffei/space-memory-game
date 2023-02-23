import React from "react";
import PropTypes from "prop-types";
import Image from "../Image/Image";

import styles from "./Card.module.css";
import propTypes from "prop-types";

const Card = ({ card, onCardClick }) => {
  const onClick = () => {
    if (card.isShown || card.isFound) return;
    onCardClick(card.uniqueId);
  };

  return (
    <div className={`${styles.container}`} onClick={onClick}>
      <div className={`${styles.card} ${card.isShown ? styles.flipped : ""}`}>
        <div
          className={`${styles.front} ${card.isFound ? styles.found : ""}`}
        ></div>
        <div className={`${styles.back}`}>
          <Image className={`${styles.imagecard}`} url={card.url} />
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: propTypes.shape({
    url: PropTypes.string.isRequired,
    uniqueId: PropTypes.number.isRequired,
    isShown: PropTypes.bool.isRequired,
    isFound: PropTypes.bool.isRequired,
  }),
  onCardClick: PropTypes.func.isRequired,
};
