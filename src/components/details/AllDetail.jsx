/* eslint-disable react/prop-types */
import React from 'react';
import Detail from './Detail';
import { useCharacterById } from '../../hooks/characters';

const AllDetail = ({ match }) => {
  const { loading, detail } = useCharacterById(match.params.id);

  if (loading) return <h1>Loading</h1>;
  return <Detail {...detail} />;
};

export default AllDetail;
