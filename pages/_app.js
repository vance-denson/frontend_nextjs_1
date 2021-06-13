import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/layouts/theme";
import { GlobalStyles } from "../styles/global";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
