import React from 'react';
import CharacterList from './CharacterList';
import { useCharacters } from '../../hooks/characters';


const AllCharacters = () => {
  const { loading, characters } = useCharacters();

  if(loading) return <h1>Loading</h1>;
  return <CharacterList characters={characters} />;
};

export default AllCharacters;
