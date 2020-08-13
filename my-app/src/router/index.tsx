import React from 'react';
import { Router, Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const router = () => (
  <BrowserRouter>
      <Switch>
        {/* <Route exact path="/home" component={App} /> // 首页路由 */}
        {/* <Route path="/userList" component={UserList} /> //用户列表页 */}
        <Redirect from='' to="/home" />
      </Switch>
  </BrowserRouter>
);
