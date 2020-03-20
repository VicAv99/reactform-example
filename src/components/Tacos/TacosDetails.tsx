import React from 'react';
import PropTypes from 'prop-types';

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
import { useForm, Controller } from 'react-hook-form';

import { Taco } from './Taco';

interface TacosDetailsProps {
  taco?: Taco;
}

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

export const TacosDetails = ({ taco }: TacosDetailsProps) => {
  const classes = useStyles();
  const { handleSubmit, reset, control, setValue } = useForm();

  if (taco?.id) {
    setValue('name', taco?.name);
  }

  const onSubmit = (data: any) => console.log(data);

  return (
    <Card className={classes.common}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Controller
            as={<TextField />}
            className={classes.common}
            control={control}
            rules={{required: true}}
            label="Taco Name"
            variant="outlined"
            placeholder="Type a Taco Name..."
            name="name"
            defaultValue="" />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small" type="submit">Submit</Button>
          <Button size="small" type="reset" onClick={() => reset()}>Cancel</Button>
        </CardActions>
      </form>
    </Card>
  );
};

TacosDetails.propTypes = {
  taco: PropTypes.object
}
