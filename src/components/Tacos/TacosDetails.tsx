import React from 'react';

import {
  Theme,
  createStyles,
  makeStyles,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    common: {
      width: '100%',
      marginLeft: '3px'
    },
    actions: {
      display: 'flex',
      flexDirection: 'row-reverse'
    }
  }),
);

export const TacosDetails = () => {
  const classes = useStyles();

  return (
    <Card className={classes.common}>
      <form noValidate autoComplete="off">
        <CardContent>
          <TextField className={classes.common} id="standard-basic" label="Taco Name" variant="outlined" placeholder="Type a Taco Name..." />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small">Submit</Button>
          <Button size="small">Cancel</Button>
        </CardActions>
      </form>
    </Card>
  );
}
