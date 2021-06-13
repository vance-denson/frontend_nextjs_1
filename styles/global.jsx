import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  transition: all 0.50s linear;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  a {
    color: inherit;
    text-decoration: none;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
}`
