import React, { useState } from "react";
import { connect } from "react-redux";

import { calculate } from "../../reducers/salaryReducer";

import "./style.css";

const SalaryForm = ({ calculate, error }) => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");

  const [salary, onChangeSalary] = useState("");
  const [superRate, onChangesuperRate] = useState("");

  const handleFirstNameChange = e => onChangeFirstName(e.target.value);
  const handleLastNameChange = e => onChangeLastName(e.target.value);
  const handleSalaryChange = e => onChangeSalary(e.target.value);
  const handleSuperRateChange = e => onChangesuperRate(e.target.value);

  const onSubmit = () => {
    if (!firstName || !lastName || !salary || !superRate) return;

    calculate({ firstName, lastName, salary, superRate });
  };

  return (
    <div className="root">
      <input
        className="input"
        onChange={handleFirstNameChange}
        value={firstName}
        placeholder="FirstName"
      />
      <input
        className="input"
        onChange={handleLastNameChange}
        value={lastName}
        placeholder="LastName"
      />

      <input
        className="input"
        onChange={handleSalaryChange}
        value={salary}
        placeholder="Annual Salary"
      />
      <input
        className="input"
        onChange={handleSuperRateChange}
        value={superRate}
        placeholder="Super Rate"
      />

      <button onClick={onSubmit}>Generate Payslip</button>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.Salary.error,
});

export default connect(mapStateToProps, { calculate })(SalaryForm);
