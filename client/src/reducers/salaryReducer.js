import { combineReducers } from "redux";

const prefix = action => `SALARY: ${action}`;
const SUBMIT_REQUEST = prefix("SUBMIT_REQUEST");
const SUBMIT_SUCCESS = prefix("SUBMIT_SUCCESS");
const SUBMIT_FAILURE = prefix("SUBMIT_FAILURE");

const CALCULATE_REQUEST = prefix("CALCULATE_REQUEST");
const CALCULATE_SUCCESS = prefix("CALCULATE_SUCCESS");
const CALCULATE_FAILURE = prefix("CALCULATE_FAILURE");

export const types = {
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE,
  CALCULATE_REQUEST,
  CALCULATE_SUCCESS,
  CALCULATE_FAILURE,
};

// TODO: move to folder /constants
export const REQUEST_EMPTY = "REQUEST_EMPTY";
export const REQUEST_LOADING = "REQUEST_LOADING";
export const REQUEST_READY = "REQUEST_READY";
export const REQUEST_ERROR = "REQUEST_ERROR";

const INITIAL_STATE = {
  loadingStatus: REQUEST_EMPTY,
  calculateStatus: REQUEST_EMPTY,
  error: undefined,
  firstName: "",
  lastName: "",
  salary: 0,
  superRate: 0,
  grossIncome: 0,
  incomeTax: 0,
  netIncome: 0,
  superAmount: 0,
  pay: 0,
  payDate: 0, // in milliseconds
};

export const calculate = ({ firstName, lastName, salary, superRate }) => ({
  type: CALCULATE_REQUEST,
  payload: {
    firstName,
    lastName,
    salary,
    superRate,
  },
});

export const calculateSuccess = ({
  grossIncome,
  incomeTax,
  netIncome,
  superAmount,
  pay,
  payDate,
}) => ({
  type: CALCULATE_SUCCESS,
  payload: {
    grossIncome,
    incomeTax,
    netIncome,
    superAmount,
    pay,
    payDate,
  },
});

export const calculateFailed = error => ({
  type: CALCULATE_FAILURE,
  payload: {
    error,
  },
});

export const submit = ({
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
}) => ({
  type: SUBMIT_REQUEST,
  payload: {
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
  },
});

export const submitSuccessed = username => ({
  type: SUBMIT_SUCCESS,
  payload: {
    username,
  },
});

export const submitFailed = error => ({
  type: SUBMIT_FAILURE,
  payload: {
    error,
  },
});

const SalaryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_REQUEST:
      return {
        ...state,
        loadingStatus: REQUEST_LOADING,
      };
    case SUBMIT_SUCCESS:
      return {
        ...state,
        loadingStatus: REQUEST_READY,
      };
    case SUBMIT_FAILURE:
      return {
        ...state,
        loadingStatus: REQUEST_ERROR,
        error: action.payload.error,
      };
    case CALCULATE_REQUEST:
      return {
        ...state,
        calculateStatus: REQUEST_LOADING,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        salary: action.payload.salary,
        superRate: action.payload.superRate,
      };
    case CALCULATE_SUCCESS:
      return {
        ...state,
        calculateStatus: REQUEST_READY,
        grossIncome: action.payload.grossIncome,
        incomeTax: action.payload.incomeTax,
        netIncome: action.payload.netIncome,
        superAmount: action.payload.superAmount,
        pay: action.payload.pay,
        payDate: action.payload.payDate,
      };
    case CALCULATE_FAILURE:
      return {
        ...state,
        calculateStatus: REQUEST_ERROR,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default combineReducers({
  Salary: SalaryReducer,
});
