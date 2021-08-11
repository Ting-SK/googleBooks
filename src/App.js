import React from "react";
import { Content } from "./components/Content";
import { Header } from "./components/ui/Header";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
    </>
  );
};
