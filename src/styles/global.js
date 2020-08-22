import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *, body, input, button, a {
    font-family: 'Montserrat'
  }

  body {
    height: 100vh;
    color: #212121;
    background: #FFFFFF;
  }

  a {
    text-decoration: none;
  }
`
