import styled from "styled-components";
import NavbarMenu from "./layouts/NavbarMenu";

const Container = styled.div`
  width: 100%;
  display: grid;
  position: sticky;
  bottom: 0;
  grid-template-columns: 60%;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: lightblue;
  box-shadow: 0.1rem 0 0.3rem 0 rgba(0, 0, 0, 0.8);
  footer {
    color: rgba(255,255,255,1);
    h3 {
    }
  }
`;

function Footer() {
  return (
    <Container>
      <footer>
        <h3>&copy; 2021</h3>
      </footer>
    </Container>
  );
}

export default Footer;
