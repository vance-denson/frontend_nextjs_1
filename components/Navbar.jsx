import styled from "styled-components";
import NavbarMenu from "./layouts/NavbarMenu";
import Link from "next/Link";

const Nav = styled.nav`
  // background: #000;
  background: lightblue;
  // background-clip: content-box;
  color: rgba(255,255,255,1);
  
  display: grid;
  position: sticky;
  top: 0;
  h1 {
    justify-self: center;
  }
  grid-template-columns: 10% auto 35%;
  align-self: center;
  .menuitems {
    align-items: center;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 100%;
  }
  box-shadow: 4px 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  a {
    text-align: center;
  }
  #logo {
    height: 100%;
    justify-self: center;
  }
`;



// console.log(pageTitle.innerText);

// function updateTitle(newTitle) =>{
//   let title = newTitle;
  
// }

const Navbar = () => {
  return (
    <Nav>
      <Link href="/" passHref>
        <a id="logo">Logo</a>
      </Link>
      <h2 id="pageTitle">Welcome to Vance</h2>
      <div className="menuitems">
        <NavbarMenu />
      </div>
    </Nav>
  );
};


export default Navbar;
