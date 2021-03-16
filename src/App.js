import React from 'react';

// Router //
import { Router, Switch, Route } from 'react-router-dom';
import history from 'utils/history';

// Styles //
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';
import '@voxeet/react-components/dist/voxeet-react-components.css';

// Screens //
import Conference from 'screens/Conference';

// Redux //
import { Provider } from 'react-redux';
import createStore from 'data/createStore';

const store = createStore();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router history={history}>
                    <>
                        <Switch>
                            <Route path='/:conferenceAlias' component={Conference} />
                        </Switch>
                        <GlobalStyles />
                    </>
                </Router>
            </Provider>
        </ThemeProvider>
    );
}

export default App;