import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import Head from "next/Head";

const Container = styled.div`
  margin: 0 2%;
  p {
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
        <h1>Projects</h1>
        <p>
          The following are projects I have worked on, roughly in order from
          newest to oldest.
          <br />
          Currently, my learning is focus is on refactoring this site using
          Next.js and Typescript
        </p>
        <ProjectCard />
      </Container>
    </>
  );
};

export default projects;
