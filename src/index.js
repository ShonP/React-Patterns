import React from 'react';
import { useTheming } from './shared/theme/useThemeing';
import ThemeContext from './shared/theme/themeContext';
import GlobalStyle from './shared/theme/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from 'styled-components';
import { Themes } from './shared/theme/themes';
import ReactDOM from 'react-dom';
import App from './App';
import store from './shared/store/store';
import { Provider } from 'react-redux';

const persistor = persistStore(store);

function ProvidedApp() {
  const themingValue = useTheming(Themes.light);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContext.Provider value={themingValue}>
          <ThemeProvider theme={themingValue.currentTheme}>
            <>
              <GlobalStyle />
              <App />
            </>
          </ThemeProvider>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ProvidedApp />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
