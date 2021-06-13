import styled from 'styled-components'
import NavbarMenu from './layouts/NavbarMenu'
import Link from 'next/Link'
import DarkModeToggle from './DarkModeToggle'

const Nav = styled.nav`
  z-index: 1;
  overflow: hidden;
  background: inherit;
  color: inherit;
  display: grid;
  grid-template-columns: 10% auto 35% 10%;
  position: fixed;
  width: 100%;
  height: 15%;
  align-self: center;
  top: 0;
  left: 0;
  box-shadow: 4px 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  .menuitems {
    align-items: center;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
  }
  #logo {
    align-self: center;
  }
  #pageTitle {
    align-self: center;
  }
  a {
    text-align: center;
  }
  #themeSlider {
    display: grid;
    align-self: center;
    justify-self: center;
  }
`
// window.addEventListener('scroll', { scrollHandler })

// const scrollHandler = () => {}

const Navbar = () => {
  return (
    <Nav>
      <Link href='/' passHref>
        <a id='logo'>Logo</a>
      </Link>
      <h2 id='pageTitle'>Welcome to Vance</h2>
      <div className='menuitems'>
        <NavbarMenu />
      </div>
      <div id='themeSlider'>
        <DarkModeToggle />
      </div>
    </Nav>
  )
}

export default Navbar
