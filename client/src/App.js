import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EmployeeInfo from './containers/EmployeeInfo';
import PaySlip from './containers/PaySlip';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          {/* EmployeeInfo */}
          <Route exact path="/">
            {<EmployeeInfo />}
          </Route>

          {/* PaySlip */}
          <Route
            exact
            path="/PaySlip"
          >
            {<PaySlip/>}
          </Route>
        </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  loadingStatus: state.Salary.loadingStatus,
});

export default connect(mapStateToProps)(App);
