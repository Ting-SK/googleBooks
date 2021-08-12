import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Content } from "./components/Content";
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
      </Switch>
    </Router>
  );
};
