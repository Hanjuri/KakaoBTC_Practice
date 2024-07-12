import * as React from 'react';
import MainScreen from './pages/MainScreen/MainScreen';
import {ThemeProvider} from './pages/MainScreen/ThemeContext';

function App() {
  return (
  <ThemeProvider>
    <MainScreen></MainScreen>
  </ThemeProvider>
  );
}

export default App;
