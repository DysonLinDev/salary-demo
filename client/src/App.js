import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { REQUEST_READY } from "./reducers/salaryReducer";
import EmployeeInfo from "./containers/EmployeeInfo";
import PaySlip from "./containers/PaySlip";

import "./App.css";

function App({ calculateStatus }) {
  const calculateReady = calculateStatus === REQUEST_READY;

  return (
    <Router>
      <Switch>
        {/* EmployeeInfo */}
        <Route exact path="/">
          {calculateReady ? <PaySlip /> : <EmployeeInfo />}
        </Route>

        {/* PaySlip */}
        <Route exact path="/PaySlip">
          {<PaySlip />}
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  calculateStatus: state.Salary.calculateStatus,
});

export default connect(mapStateToProps)(App);
