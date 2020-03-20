import React from 'react';
import PropTypes from 'prop-types';

import { Taco } from '.';
import { List, ListItem, ListItemText, makeStyles, Theme, createStyles, Card } from '@material-ui/core';

interface TacosListProps {
  tacos: Taco[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    common: {
      width: '100%',
      marginRight: '3px'
    },
  }),
);

export const TacosList = ({ tacos }: TacosListProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.common}>
      <List>
        {
          tacos.map((taco: Taco, i: number) => (
            <ListItem key={i} button>
              <ListItemText primary={taco.id} secondary={taco.name} />
            </ListItem>
          ))
        }
      </List>
    </Card>
  );
}

TacosList.propTypes = {
  tacos: PropTypes.array.isRequired
}
