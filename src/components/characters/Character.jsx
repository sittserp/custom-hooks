import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, photoUrl, _id }) => (
  <Link key={_id} to = {`/details/${_id}`}>
    <figure>
      <img src={photoUrl} />
      <figcaption>{name}</figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default Character;
