import logo from './logo.svg';
import './App.css';

// Router //
import { Router, Switch, Route } from 'react-router-dom';

// Styles //
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';
import '@voxeet/react-components/dist/voxeet-react-components.css';

function App() {
  return (

  <ThemeProvider theme={theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </ThemeProvider>
  );
}

export default App;
