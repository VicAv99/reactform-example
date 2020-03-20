import React from 'react';

import styled from 'styled-components';
import { Container as MatContainer } from '@material-ui/core';

import { TacosList, TacosDetails } from '.';
import { useApi } from '../../services';
import { SimpleSnackbar } from '../Snackbar';

// -------------------
// Styles
// -------------------

const Container = styled(MatContainer)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// -----------------------
// Functional Components
// -----------------------

export const Tacos = () => {
  const [ tacos, , error ] = useApi('all');

  if (!!error) {
    return(
      <SimpleSnackbar error={error} />
    );
  }

  return (
    <Container fixed>
      <TacosList tacos={Array.isArray(tacos) ? tacos : []} />
      <TacosDetails />
    </Container>
  );
}
