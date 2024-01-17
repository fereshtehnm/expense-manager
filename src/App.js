import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/Expenses/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { 
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  },
]

// arrow func
const App = () => {
  // to get access to expenses and to set updating function
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES) //initial state

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses]) // not correct 
    setExpenses((prevExpenses) => { // auto by react
      return [expense, ...prevExpenses]
    })
  }
  return(
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  )
}
export default App
