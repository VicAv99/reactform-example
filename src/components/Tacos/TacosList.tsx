import React from 'react';
import PropTypes from 'prop-types';

import { Taco } from '.';
import { List, ListItem, ListItemText } from '@material-ui/core';

interface TacosListProps {
  tacos: Taco[];
}

export const TacosList = ({ tacos }: TacosListProps) => {
  return (
    <List>
      {
        tacos.map((taco: Taco, i: number) => (
          <ListItem key={i}>
            <ListItemText primary={taco.id} secondary={taco.name} />
          </ListItem>
        ))
      }
    </List>
  );
}

TacosList.propTypes = {
  tacos: PropTypes.array.isRequired
}
