import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import Head from "next/Head";

const Container = styled.div`
  margin: 0 2%;
  display: grid;
  h2 {
    margin-top: 1%;
    margin-bottom: 0;
  }
  h2,
  h4 {
    text-align: center;
    line-height: 2rem;
  }
`;

const projects = () => {
  return (
    <>
      <Head>
        <title>Vance's Projects</title>
        <meta
          name="description"
          content="Vance Denson, programming projects front-end frontend fullstack developer website portfolio react nextjs sql posgres"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h2>Projects</h2>
        <h4>
          The following are projects I have worked on, roughly in order from
          newest to oldest.
          <br />
          Currently, my learning is focus is on refactoring this site using
          Next.js and Typescript
        </h4>
        <ProjectCard />
      </Container>
    </>
  );
};

export default projects;
