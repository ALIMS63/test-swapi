import React, { useEffect, useState } from 'react';
import './App.css';
import OnePeople from '../OnePeople/OnePeople';
import TablePeoples from '../TablePeoples/TablePeoples';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <TablePeoples />
          </Route>

          <Route path="/:id" exact>
            <OnePeople />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
