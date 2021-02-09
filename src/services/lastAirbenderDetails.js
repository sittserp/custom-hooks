/* eslint-disable max-len */
export const getDetails = (id) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
}; 
