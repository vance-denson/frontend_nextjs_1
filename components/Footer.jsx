import styled from 'styled-components'
import NavbarMenu from './layouts/NavbarMenu'

const Container = styled.div`
  width: 100%;
  height: 10%;
  display: grid;
  position: fixed;
  bottom: 0;
  left: 0;
  grid-template-columns: 60%;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: inherit;
  box-shadow: 4px 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  footer {
    color: rgba(255, 255, 255, 1);
    h3 {
    }
  }
`

function Footer () {
  return (
    <Container>
      <footer>
        <h3>&copy; 2021</h3>
      </footer>
    </Container>
  )
}

export default Footer
