import React, { Component } from 'react';
import StarBar from './components/StarRatingBar/StarBar';
import DropDown from './components/droplist/DropDown';
import DropListItem from './components/droplist/DropListItem';
import Project from './components/droplist/project';
import { Link, Switch, Route, withRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {

    const wholeThing = {
      width: '330px'
    };
    return (
      <div>
        <StarBar style={wholeThing}/>

        <DropDown name="file" >
          <DropListItem name="New" />
          <DropListItem name="Save" />
          <DropListItem name="Delete" />
        </DropDown>

        <DropDown name="Projects">
          <ul>
            <li>
              <Link to={ '/project/' + '0'}>Calculator</Link>
            </li>
            <li>
              <Link to={ '/project/' + '1'}>Snippets</Link>
            </li>
          </ul>
        </DropDown>



        <Switch>
          <Route path="/project/:id" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
