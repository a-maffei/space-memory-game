import React from "react";
import PropTypes from "prop-types";
import styles from "./Image.css";

const Image = ({ url }) => (
  <div>
    <img src={url} width="200" className="imagecard" />
  </div>
);

export default Image;

Image.propTypes = {
  url: PropTypes.string.isRequired,
};
