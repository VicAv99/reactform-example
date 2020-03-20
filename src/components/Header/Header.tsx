import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
