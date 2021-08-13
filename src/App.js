import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Content } from "./components/Content";
import { Books } from "./components/ui/Books";
import { BooksFound } from "./components/ui/BooksFound";
import { Header } from "./components/ui/Header";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/book/:id">
          <BooksFound />
        </Route>
      </Switch>
    </Router>
  );
};
