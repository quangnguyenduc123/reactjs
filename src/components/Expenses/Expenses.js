import ExpenseItem from './ExpenseItem.js'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter.js'
import { useState } from 'react'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021')
  const onChangeYear = (year) => {
    setFilteredYear(year)
  }
  return (
    <div>
      <ExpensesFilter selectedYear={filteredYear} onChangeYear={onChangeYear} ></ExpensesFilter>
      <Card className="expenses">
        <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
        <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
        <ExpenseItem expense={props.expenses[2]}></ExpenseItem>
        <ExpenseItem expense={props.expenses[3]}></ExpenseItem>
      </Card>
    </div>
  )
}

export default Expenses