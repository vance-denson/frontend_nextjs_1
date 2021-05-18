import Head from "next/Head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vance's Home Page</title>
        <meta
          name="description"
          content="Vance Denson, server-side render is sweeeeet fullstack front-end frontend time to build"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}
