import styled from 'styled-components'
import Link from 'next/Link'

const LinkStyle = styled.a`
  padding: 5%;
  height: 100%;
  display: grid;
  align-items: center;
  :hover {
    animation: links 0.3s ease-in 1 normal forwards;
  }
  @keyframes links {
    to {
      border-bottom: 7px solid rgba(255, 255, 244, 0.4);
      font-size: 110%;
    }
  }
`

const MenuButton = styled.div``

const NavbarMenu = () => {
  let NAVITEMS = ['about', 'projects']
  return (
    <>
      <Link href='/' passHref>
        <LinkStyle>Home</LinkStyle>
      </Link>
      {NAVITEMS.map(n => (
        <Link href={n} passHref>
          <LinkStyle>{n[0].toUpperCase() + n.substring(1)}</LinkStyle>
        </Link>
      ))}
    </>
  )
}

export default NavbarMenu
