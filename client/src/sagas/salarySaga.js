import { all, takeLatest, put, call } from "redux-saga/effects";

import {
  types,
  submitSuccessed,
  submitFailed,
  calculateSuccess,
  calculateFailed,
} from "../reducers/salaryReducer";

import { savePayslip } from "../apis/salary";

export const getTaxableFee = (salary, min, rangeTop, rate) => {
  return Math.round((min + (salary - rangeTop) * rate) / 12);
};

export function* getTaxAmount(salary) {
  try {
    // ref: https://www.ato.gov.au/Rates/Individual-income-tax-for-prior-years
    if (salary <= 18200) {
      return 0;
    }

    let minimum = 0;
    let rangeTop = 0;
    let rate = 0;

    if (salary > 18200 && salary <= 37000) {
      minimum = 0;
      rangeTop = 18200;
      rate = 0.19;
    }

    if (salary > 37000 && salary <= 80000) {
      minimum = 3572;
      rangeTop = 37000;
      rate = 0.325;
    }

    if (salary > 80000 && salary <= 180000) {
      minimum = 17547;
      rangeTop = 80000;
      rate = 0.37;
    }

    if (salary > 180000) {
      minimum = 54547;
      rangeTop = 180000;
      rate = 0.45;
    }

    return getTaxableFee(salary, minimum, rangeTop, rate);
  } catch (error) {
    throw error;
  }
}

export function* calculateSalaryFlow(action) {
  try {
    const { salary, superRate } = action.payload;

    // calculator logic
    const grossIncome = Math.round(salary / 12);
    const superAmount = Math.round((grossIncome * superRate) / 100);
    const incomeTax = yield call(getTaxAmount, salary);
    const netIncome = grossIncome - incomeTax;
    const pay = netIncome - superAmount;

    yield put(
      calculateSuccess({
        grossIncome,
        incomeTax,
        netIncome,
        superAmount,
        pay,
        payDate: Date.now(),
      }),
    );
  } catch (error) {
    yield put(calculateFailed(error));
  }
}

export function* savePayRecordFlow(action) {
  try {
    const {
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
    } = action.payload;

    yield call(savePayslip, {
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

    yield put(submitSuccessed());
  } catch (error) {
    yield put(submitFailed(error.message));
  }
}

export default function* salarySaga() {
  yield all([
    takeLatest(types.CALCULATE_REQUEST, calculateSalaryFlow),
    takeLatest(types.SUBMIT_REQUEST, savePayRecordFlow),
  ]);
}
