import { useState, useEffect } from 'react';
import { getCharacters } from '../services/lastAirbender';
import { getDetails } from '../services/lastAirbenderDetails';
import { useParams } from 'react-router-dom';

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

export const useCharacterById = () => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

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
