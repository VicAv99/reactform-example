import React from 'react';

import { Container } from '@material-ui/core';

import { TacosList, TacosDetails } from '.';
import { useApi } from '../../services';

export const Tacos = () => {
  const [ tacos, isLoading, error, retry ] = useApi('all');

  return (
    <Container fixed>
      <TacosList tacos={tacos ?? []} />
      <TacosDetails />
    </Container>
  );
}
