import React from "react";
import ReactDOM from "react-dom";
import HomeGuest from "./component/homeGuest";
import Header from "./component/header";
import Footer from "./component/footer";
import Terms from "./component/Terms";
import About from "./component/about";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/about-us" component={About} />
        <Route path="/terms" component={Terms} />
        <Route path="/" exact component={HomeGuest} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
