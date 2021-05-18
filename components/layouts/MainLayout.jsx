import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components";

const Container = styled.div`
  //   font-size: 10px;
  position: relative;
`;

const MainArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15% 75% 10%; ;
`;

function MainLayout({ children }) {
  return (
    <Container>
      <MainArea>
        <Navbar />
        {children}
        <Footer />
      </MainArea>
    </Container>
  );
}

export default MainLayout;
