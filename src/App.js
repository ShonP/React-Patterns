import React, { useCallback } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import styled from 'styled-components';
import { themes, Themes } from './shared/theme/themes';
import { useThemeContext } from './shared/theme/useThemeing';
import Button from './shared/components/Button';

const Root = styled.div`
  background-color: ${({ theme }) => theme.application.background};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

const ReactStyledImg = styled.img.attrs(() => ({
  src: 'https://miro.medium.com/proxy/1*8slP0diGduUQy3qk9N7HsQ.png',
}))`
  width: 500px;
  height: 300px;
  border-radius: 50%;
`;

const Homepage = () => {
  const { changeTheme, currentTheme } = useThemeContext();
  const isThemeLight = currentTheme === themes[Themes.light];
  const toggleTheme = useCallback(
    () => changeTheme(isThemeLight ? Themes.dark : Themes.light),
    [changeTheme, isThemeLight]
  );

  return (
    <Root>
      <ReactStyledImg />
      <Button onClick={toggleTheme}>
        Current Theme:
        {isThemeLight ? ' Light' : ' Dark'}
      </Button>
    </Root>
  );
};

function App() {
  return (
    <div className="App">
      <Homepage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
