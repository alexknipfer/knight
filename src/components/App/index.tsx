import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components/macro'

import { Welcome } from '../../views/Welcome'
import { DefaultLayout } from '../DefaultLayout'

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

export function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <DefaultLayout>
        <Welcome />
      </DefaultLayout>
    </Fragment>
  )
}
