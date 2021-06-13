import styled from 'styled-components'
import Link from 'next/Link'

const Card = styled.div`
  width: 150px;
  height: 150px;
  display: grid;
  box-shadow: 4px 0px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  grid-gap: 5px 5px;
  background-color: inherit;
  // background-color: lightblue;
  text-align: center;
  :hover {
    animation: cardMove 1s ease-out 1 normal forwards;
  }
  @keyframes cardMove {
    to {
      background-color: rgba(010, 014, 018, 0.2);
      box-shadow: 2px 2px 0.8rem rgba(0, 0, 0, 0.7);
      color: black;
    }
  }
`

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-gap: 10%;
  grid-template-columns: auto auto auto;
  justify-content: center;
  padding-bottom: 6%;
  cursor: pointer;
  text-align: center;
`

function ProjectCard () {
  let SITE_PROJECTS = [
    'HTML/CSS',
    'React/SASS',
    'Python',
    'SQL',
    'Next.js',
    'Java'
  ]

  return (
    <>
      <Container>
        {/* <div className='cards'> */}
        {SITE_PROJECTS.map(p => (
          <Card>
            <a>{p}</a>
          </Card>
        ))}
        {/* </div> */}
      </Container>
    </>
  )
}

export default ProjectCard
