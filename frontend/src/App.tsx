import './App.css';

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import theme from './theme'
import Home from './screens/home';
import { useMediaQuery } from '@mui/material';
import React from 'react';

function App() {

  // Gets the current system prefs.
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const currentTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          ...theme
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
