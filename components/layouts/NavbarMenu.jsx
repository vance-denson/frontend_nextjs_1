import styled from "styled-components";
import Link from "next/Link";

const LinkStyle = styled.a`
  padding: 5%;
  height: 100%;
  display: grid;
  align-items: center;
  // border-bottom: 3px solid white;
  :hover {
    margin: 3px 0px;
    animation: links 0.15s ease-in 1 normal forwards;
  }
  @keyframes links {
    to {
      border-bottom: 5px solid rgba(255, 255, 244, 0.3);
    }
  }
`;

const MenuButton = styled.div``;

const NavbarMenu = () => {
  return (
    <>
      <Link href="/" passHref>
        <LinkStyle>Home</LinkStyle>
      </Link>
      <Link href="/about" passHref>
        <LinkStyle>About</LinkStyle>
      </Link>
      <Link href="/projects" passHref>
        <LinkStyle>Projects</LinkStyle>
      </Link>
      <span className="menuButton"></span>
    </>
  );
};

export default NavbarMenu;
