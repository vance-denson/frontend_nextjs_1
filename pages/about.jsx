import styled from "styled-components";
import Head from "next/Head";

const about = () => {
  return (
    <>
      <Head>
        <title>About Vance!</title>
        <meta
          name="description"
          content="Vance Denson, front-end frontend developer website portfolio react nextjs sql posgres"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Hello and thanks for visiting my page!
          <br />I am a 33 year old aspiring web developer that currently works
          in Bluetooth and Wi-Fi quality assurance for the past 7 years, and
          have decided to pursue my passion.
        </p>
      </div>
    </>
  );
};

export default about;
