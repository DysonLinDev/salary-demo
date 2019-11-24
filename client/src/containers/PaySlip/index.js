import React from "react";
import { connect } from "react-redux";

import { submit } from "../../reducers/salaryReducer";

import { REQUEST_READY } from "../../reducers/salaryReducer";

import "./style.css";

const PaySlip = ({
  loadingStatus,
  submit,
  error,
  firstName,
  lastName,
  salary,
  grossIncome,
  incomeTax,
  netIncome,
  superRate,
  superAmount,
  pay,
  payDate,
}) => {
  const onSubmit = () =>
    submit({
      firstName,
      lastName,
      salary,
      grossIncome,
      incomeTax,
      netIncome,
      superRate,
      superAmount,
      pay,
      payDate,
    });
  const transNumberFormat = number =>
    `$ ${new Intl.NumberFormat("AU").format(number)}.00`;

  const titleArray = [
    "pay Date",
    "pay Frequency",
    "Annual Income",
    "Gross Income",
    "Income Tax",
    "Net Income",
    "Super",
    "Pay",
  ];
  const dataArray = [
    new Date(payDate).toLocaleDateString("US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    "Monthly",
    transNumberFormat(salary),
    transNumberFormat(grossIncome),
    transNumberFormat(incomeTax),
    transNumberFormat(netIncome),
    transNumberFormat(superAmount),
    transNumberFormat(pay),
  ];

  if (!!error) alert(error);
  if (loadingStatus === REQUEST_READY) alert("Save payslip successfully");

  return (
    <div className="root">
      <div className="title">Payslip</div>
      <div className="name">
        {firstName} {lastName}
      </div>
      <div className={"list"}>
        {titleArray.map((title, index) => (
          <div key={index} className={"item"}>
            <div>{title}</div>
            <div>{dataArray[index]}</div>
          </div>
        ))}
      </div>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

const mapStateToProps = state => ({
  loadingStatus: state.Salary.loadingStatus,
  error: state.Salary.error,
  firstName: state.Salary.firstName,
  lastName: state.Salary.lastName,
  salary: state.Salary.salary,
  grossIncome: state.Salary.grossIncome,
  incomeTax: state.Salary.incomeTax,
  netIncome: state.Salary.netIncome,
  superRate: state.Salary.superRate,
  superAmount: state.Salary.superAmount,
  pay: state.Salary.pay,
  payDate: state.Salary.payDate,
});

export default connect(mapStateToProps, { submit })(PaySlip);
