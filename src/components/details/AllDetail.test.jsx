import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import avatarDetail from '../../fixtures/avatarDetail.json';
import AllDetail from './AllDetail';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68d5', (req, res, ctx) => {
    return res(ctx.json(avatarDetail));
  })
);

describe('AllDetail container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a characters details', async() => {
    render(<AllDetail match={{ params: { id: '5cf5679a915ecad153ab68d5' } }}/>);

    screen.getByText('Loading');
    
    return waitFor(() => {
      screen.getByText('Arik');
      screen.getByText('Affiliation: Earth Kingdom Air Force');
      screen.getByText('Allies: His');
    });
  });
});
