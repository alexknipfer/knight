import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components/macro'

import Welcome from '../../views/Welcome/Welcome'

const GlobalStyle = createGlobalStyle`
  html, body, main, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Welcome />
    </Fragment>
  )
}

export default App