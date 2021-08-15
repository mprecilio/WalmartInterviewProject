import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../views/homePageView";
import RedirectHome from '../components/redirects/toMainPage'
import ViewProfile from '../components/viewProfile/viewProfileComp'

const IsLoggedRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={ViewProfile} />
          <Route path="/" component={RedirectHome} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default IsLoggedRouter;
