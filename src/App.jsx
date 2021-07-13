import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from '@src/GlobalStyles';
import Context from '@src/Context';
import Loader from '@components/Loader';

export default () => {
  const Layout = React.lazy(() => import('@components/Layout'));
  const Home = React.lazy(() => import('@components/Pages/Home'));
  const Categories = React.lazy(() => import('@components/Pages/Categories'));
  const ListOfBusinesses = React.lazy(() =>
    import('@components/Pages/Categories/ListOfBusinesses')
  );
  const Conference = React.lazy(() => import('@components/Pages/Conferences'));
  const ListOfVolunteers = React.lazy(() =>
    import('@components/Pages/Volunteering/ListOfVolunteers')
  );
  const Volunteering = React.lazy(() =>
    import('@components/Pages/Volunteering')
  );
  const NotFound = React.lazy(() => import('@components/Pages/NotFound'));

  return (
    <Suspense fallback={<Loader />}>
      <Context.Provider>
        <GlobalStyles />
        <Router>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/categorias' component={Categories} />
              <Route
                exact
                path='/categorias/:id'
                component={ListOfBusinesses}
              />
              <Route exact path='/blog' component={Conference} />
              <Route exact path='/conferencia' component={Conference} />
              <Route exact path='/voluntariado' component={Volunteering} />
              <Route
                exact
                path='/voluntariado/:id'
                component={ListOfVolunteers}
              />
              <Route path='*' component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </Context.Provider>
    </Suspense>
  );
};
