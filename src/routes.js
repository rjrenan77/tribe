import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/Main" component={Main}></Route>
        <Route path="/Profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}
