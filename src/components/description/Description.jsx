import React from 'react';
import '../content/Content.scss';
import Content from '../content/Content';
import Shortcut from '../shortcut/Shortcut';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';

const Description = () => {
    return (
        <Router>
            <Route exact path="/" component={Shortcut} />
            <Route path="/content" component={Content} />
        </Router>
    );
}

export default Description;