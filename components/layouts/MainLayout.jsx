import Navbar from '../Navbar'
import Footer from '../Footer'
import styled from 'styled-components'

// const MainArea = styled.div`
//   position: relative;
//   margin-top: 6%;
// `

function MainLayout ({ children }) {
  return (
    <MainArea>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </MainArea>
  )
}

export default MainLayout
