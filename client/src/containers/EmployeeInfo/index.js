import React from 'react';

import SalaryForm from '../../components/SalaryForm';

import styles from './style.css';

const EmployeeInfo = ({ username }) => {
  return (
    <div className={styles.root}>
      <SalaryForm />
    </div>
  )
}

export default EmployeeInfo;