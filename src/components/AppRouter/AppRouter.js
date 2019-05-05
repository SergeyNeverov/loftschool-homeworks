// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import ShowPage from '../ShowPage';
import Search from '../Search';
import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path={'/'} exact component={Search} />
          <Route path={'/shows/:id'} component={ShowPage} />
          <Redirect to={'/'} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
