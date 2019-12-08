import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './components/app'

const GlobalStyles = createGlobalStyle`
  @media screen and (prefers-color-scheme: light), screen and (prefers-color-scheme: no-preference) {
    /* Light theme */
    body{
      color: #000;
      background-color: #fff;
    }
  }

  @media screen and (prefers-color-scheme: dark) {
    /* Dark theme */
    body {
      color: #fff;
      background-color: #000;
    }
  }
`

const AppWrapper = () => (
  <>
    <GlobalStyles />

    <App />
  </>
)

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Now we can render our application into it
render(<AppWrapper />, document.getElementById('root'))
