import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Nav from './Nav/Nav';
import routes from '../routes';

export default function App() {
  return (
    <Layout>
      <Nav />
      <Suspense fallback={false}>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Layout>
  );
}
