import styled from "styled-components";
import Link from 'next/Link';

const Card = styled.div`
  display: grid;
  box-shadow: 4px 0px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 150px;
  background-color: lightblue;
  padding: 5rem;
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
`;

const Container = styled.div`
  justify-content: space-between;
  cursor: pointer;
  .cards {
    display: flex;
    gap: 1.5rem 1.5rem;
    justify-content: center;
    align-self: center;
    margin: 0px 5px;
    #projectCard {
      justify-content: center;
      color: white;
    }
  }
`;


function ProjectCard() {
 let SITE_Projects = ['HTML/CSS','React/SASS','Python', 'SQL', 'Next.js','Java']

 function projectSelection(props){
   console.log(props);
 }
  
  return (
    <Container>
      <div className="cards">

      <Link href="/projects" onClick={projectSelection} passhref><Card id="projectCard"><a>{SITE_Projects[0]}</a></Card></Link>
      </div>
    </Container>
  );
}

export default ProjectCard;
