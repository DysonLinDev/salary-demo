import React, { useState } from "react";
import { connect } from "react-redux";

import { calculate } from "../../reducers/salaryReducer";

import "./style.css";

const nameRegex = /^[a-zA-Z]+$/;
const superRateRegex = /^\d(\.)?(\d+)?$/;

const SalaryForm = ({ calculate, error }) => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");

  const [salary, onChangeSalary] = useState("");
  const [superRate, onChangesuperRate] = useState("");

  const isNameValid = name => nameRegex.test(name);

  const handleFirstNameChange = e => {
    const newValue = e.target.value;
    if (!isNameValid(newValue)) return;

    onChangeFirstName(newValue);
  };
  const handleLastNameChange = e => {
    const newValue = e.target.value;
    if (!isNameValid(newValue)) return;

    onChangeLastName(e.target.value);
  };
  const handleSalaryChange = e => onChangeSalary(e.target.value);
  const handleSuperRateChange = e => {
    const newValue = e.target.value;
    const isFormatValid = superRateRegex.test(newValue);

    if (!isFormatValid) return;
    onChangesuperRate(e.target.value);
  };

  const onSubmit = () => {
    if (!firstName || !lastName || !salary || !superRate) return;
    if (superRate > 100) return;

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
        type="number"
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
