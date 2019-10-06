import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components/macro'
import App from './App'

const GlobalStyle = createGlobalStyle`
  * {
    appearance: none;
    box-sizing: border-box;
  }

  html {
    background-color: #f5f7fa;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 16px;
    height: 100%;
    line-height: 1.5rem;
    min-height: 100%;
  }

  body, #root {
    height: 100%;
    margin: 0;
    min-height: 100%;
  }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
)
