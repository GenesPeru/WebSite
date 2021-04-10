import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import Categories from './components/Pages/Categories';
import NotFound from './components/Pages/NotFound';
import ListOfBusinesses from './components/Pages/Categories/ListOfBusinesses';
import Volunteering from './components/Pages/Volunteering';
import ListOfVolunteers from './components/Pages/Volunteering/ListOfVolunteers';

import Context from './Context';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';

export default () => {
  return (
    <Context.Provider>
      <GlobalStyles />
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/categorias' component={Categories}></Route>
            <Route
              exact
              path='/categorias/:id'
              component={ListOfBusinesses}
            ></Route>
            <Route exact path='/voluntariado' component={Volunteering} />
            <Route
              exact
              path='/voluntariado/:id'
              component={ListOfVolunteers}
            ></Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Context.Provider>
  );
};
