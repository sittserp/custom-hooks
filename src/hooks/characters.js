import { useState, useEffect } from 'react';
import { getCharacters } from '../services/lastAirbender';
import { getDetails } from '../services/lastAirbenderDetails';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    characters
  };
};

export const useCharacterById = id => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    getDetails(id)
      .then(detail => {
        setDetail(detail);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    detail
  };
};
