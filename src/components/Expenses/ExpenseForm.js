import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // using state for 2way binding
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const ExpenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(ExpenseDate)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text'
                        value={enteredTitle} 
                        onChange={TitleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        value={enteredAmount}
                        min="0.01" 
                        step="0.01" 
                        onChange={AmountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date </label>
                    <input 
                        type='date' 
                        value={enteredDate}
                        min="2019-01-01" 
                        max="2023-01-01" 
                        onChange={DateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                {/* using pointer defined in new expense */}
                <button type="button" onClick={props.onCancel}>cancel</button>
                <button type="submit">submit</button>
            </div>
        </form>
    )
}
export default ExpenseForm