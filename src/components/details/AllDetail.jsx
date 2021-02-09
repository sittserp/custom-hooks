import React from 'react';
import Detail from './Detail';
import { useCharacterById } from '../../hooks/characters';

const AllDetail = () => {
  const { loading, detail } = useCharacterById();

  if (loading) return <h1>Loading</h1>;
  return <Detail {...detail} />;
};

export default AllDetail;
