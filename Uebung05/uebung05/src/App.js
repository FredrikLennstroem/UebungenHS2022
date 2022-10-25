import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Timer from './Timer';

function App() {
  return (
    <>
      <AppBar position='sticky' color='success'>
        <Toolbar>
          <Typography variant='h4'>Counter</Typography>
        </Toolbar>
      </AppBar>
      <Timer />
    </>
  );
}

export default App;
