import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ name, photoUrl, affiliation, allies }) => (
  <figure>
    <img src={photoUrl} />
    <figcaption>{name}</figcaption>
    <figcaption>Affiliation: {affiliation}</figcaption>
    <figcaption>Allies: {allies}</figcaption>
  </figure>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired
};

export default Detail;
