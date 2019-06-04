import React from "react";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Table from "../../components/Table/Table";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Root from "../Root/Root";
import RootOld from "../Root/RootOld";
import Details from "../Details/Details";
import Settings from "../Settings/Settings";
import Main from "../Main/Main";

const Maine = ({ ...props }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RootOld} />
        <Route path="/details" component={Details} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
};

export default Maine;
