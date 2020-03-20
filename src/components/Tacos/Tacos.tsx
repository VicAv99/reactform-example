import React from 'react';

import { Container } from '@material-ui/core';

import { TacosList, TacosDetails } from '.';
import { useApi } from '../../services';

export const Tacos = () => {
  // const [ ] = useApi('all');

  return (
    <Container fixed>
      <TacosList />
      <TacosDetails />
    </Container>
  );
}
