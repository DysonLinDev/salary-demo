import axios from "axios";

export const savePayslip = ({
  firstName,
  lastName,
  salary,
  superRate,
  grossIncome,
  incomeTax,
  netIncome,
  superAmount,
  pay,
  payDate,
}) =>
  axios({
    method: "post",
    url: "http://localhost:3006/salaryRecord",
    data: {
      firstName,
      lastName,
      salary,
      superRate,
      grossIncome,
      incomeTax,
      netIncome,
      super: superAmount,
      pay,
      payDate,
    },
    headers: { "Access-Control-Allow-Origin": "*" },
  })
    .then(res => res)
    .catch(err => {
      throw err.response.data;
    });
