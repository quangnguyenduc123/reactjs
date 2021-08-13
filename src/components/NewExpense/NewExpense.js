import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isOpenForm, setOpenForm] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setOpenForm(false)
  };

  const onClickAddButton = (event) => {
    setOpenForm(true)
  }
  const onClickCancelButton = () => {
    setOpenForm(false)
  }

  return (
    <div className='new-expense'>
      {isOpenForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickCancelButton={onClickCancelButton} />}
      {!isOpenForm && <button onClick={onClickAddButton}>Add New Expenses</button>}
    </div>
  );
};

export default NewExpense;
