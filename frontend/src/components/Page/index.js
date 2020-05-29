import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import './page.scss';

import ServiceList from 'src/containers/ServiceList';
import HomePage from '../HomePage';
import Contact from '../Contact';
import ServiceDetail from '../ServiceDetail';
import JobWorkerList from '../JobWorkerList';
import JobWorkerDetail from '../JobWorkerDetail';
import ProfilFriendlyUser from '../ProfilFriendlyUser';
import ProfilWorkJober from '../ProfilWorkJober';
import Request from '../Request';
import Error from '../Error';


const Page = ({ serviceList }) => (
  <div className="page">
    <div className="page-content">
      <Switch>
        <Route
          path="/services/:slug/menage"
          exact
        >
          <ServiceDetail />
        </Route>
        <Route
          path="/services/"
          exact
        >
          <ServiceList />
        </Route>
        <Route
          path="/services/:slug"
          exact
        >
          <ServiceDetail serviceList={serviceList} />
        </Route>
        <Route
          path="/services"
          exact
        >
          <ServiceList />
        </Route>
        <Route
          path="/contact"
          exact
        >
          <Contact />
        </Route>
        <Route
          path="/jobworker/thibault"
          exact
        >
          <JobWorkerDetail />
        </Route>
        <Route
          path="/jobworker"
        >
          <JobWorkerList />
        </Route>
        <Route
          path="/demandes"
          exact
        >
          <Request />
        </Route>
        <Route
          path="/profil"
          exact
        >
          <ProfilWorkJober />
        </Route>
        <Route
          path="/profil"
          exact
        >
          <Request />
        </Route>
        <Route
          path="/"
          exact
        >
          <HomePage />
        </Route>
        <Route
          path="*"
          exact
        >
          <Error />
        </Route>
      </Switch>
    </div>
  </div>
);

Page.propTypes = {
  serviceList: PropTypes.array.isRequired,
};

export default Page;
