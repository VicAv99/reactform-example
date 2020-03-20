import React from 'react';

import { Snackbar } from '@material-ui/core';

interface SnackbarProps {
  error?: any;
}

export const SimpleSnackbar = ({ error }: SnackbarProps) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!error?.message}
        autoHideDuration={6000}
        message={error?.message}
      />
    </div>
  );
}
