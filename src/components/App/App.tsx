import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components/macro'

import Welcome from '../../views/Welcome/Welcome'
import { Layout } from '../Layout/Layout'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #0f373a;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout>
        <Welcome />
      </Layout>
    </Fragment>
  )
}

export default App
