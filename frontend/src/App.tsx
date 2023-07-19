import './App.css';

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import theme from './theme'
import Home from './screens/home';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import * as Sentry from '@sentry/react';

function App() {

  // Sentry.io monitoring for React
  Sentry.init({
    dsn: "https://179d530db5a64020b9d11d5fac282574@o4505554363678720.ingest.sentry.io/4505554365644800",
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });

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

export default Sentry.withProfiler(App);
