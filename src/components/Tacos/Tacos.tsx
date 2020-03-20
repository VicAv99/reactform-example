import React, { useState } from 'react';

import styled from 'styled-components';
import { Container as MatContainer } from '@material-ui/core';

import { TacosList, TacosDetails } from '.';
import { useApi } from '../../services';
import { SimpleSnackbar } from '../Snackbar';
import { Taco } from './Taco';

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
  const [ taco, setTaco ] = useState<Taco>({} as Taco);

  const selectTaco = (selectedTaco: Taco) => {
    setTaco(selectedTaco);
  }

  if (!!error) {
    return(
      <SimpleSnackbar error={error} />
    );
  }

  return (
    <Container fixed>
      <TacosList
        selectTaco={selectTaco}
        tacos={Array.isArray(tacos) ? tacos : []} />
      <TacosDetails taco={taco} />
    </Container>
  );
}
