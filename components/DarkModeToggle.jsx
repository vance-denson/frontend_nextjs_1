import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './useDarkMode'
import { lightTheme, darkTheme } from '../components/layouts/theme'
import { GlobalStyles } from '../styles/global'

const Input = styled.input`
  visibility: hidden;
  position: relative;
  width: 60px;
  height: 20px;
  appearance: none;
  background: #e6e6e6;
  outline: none;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 1 2 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  cursor: pointer;
  :checked {
    background: #03a9f4;
    :before {
      left: 40px;
    }
  }
  :before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }
`

function swapTheme (e) {
  console.log(e.target, e.props)
}

export const Slider = () => {
  // const [theme, toggleTheme, componentMounted] = useDarkMode()
  // const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
      <Input type='checkbox' name='' onClick={swapTheme} />
    </>
  )
}

export default Slider
