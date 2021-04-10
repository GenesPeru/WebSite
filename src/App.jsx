import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import Layout from './components/Layout';
import Context from './Context';

export default () => {
  const Home = React.lazy(() => import('./components/Pages/Home'));
  const Categories = React.lazy(() => import('./components/Pages/Categories'));
  const ListOfBusinesses = React.lazy(() =>
    import('./components/Pages/Categories/ListOfBusinesses')
  );
  const ListOfVolunteers = React.lazy(() =>
    import('./components/Pages/Volunteering/ListOfVolunteers')
  );
  const Volunteering = React.lazy(() =>
    import('./components/Pages/Volunteering')
  );
  const NotFound = React.lazy(() => import('./components/Pages/NotFound'));

  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
};
