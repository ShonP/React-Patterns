import React from 'react';
import { useTheming } from './shared/theme/useThemeing';
import ThemeContext from './shared/theme/themeContext';
import GlobalStyle from './shared/theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Themes } from './shared/theme/themes';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './shared/store/store';
import { Provider } from 'react-redux';

function ProvidedApp() {
  const themingValue = useTheming(Themes.light);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themingValue}>
        <ThemeProvider theme={themingValue.currentTheme}>
          <>
            <GlobalStyle />
            <App />
          </>
        </ThemeProvider>
      </ThemeContext.Provider>
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
