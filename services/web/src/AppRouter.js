import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './App';
import HangmanSingle from './HangmanSingle';
import SingleName from './SingleName';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/single_name/" component={SingleName} />
        <Route path="/hangman_single/" component={HangmanSingle} />
      </div>
    </Router>
  );
}

export default AppRouter;
