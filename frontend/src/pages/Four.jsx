import React, { useState } from 'react'
import ExpenseOverview from '../components/ExpenseOverview'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseTransactionDetails from '../components/ExpenseTransactionDetails'

const Four = () => {
    const [ expenses, setExpenses ] = useState([])
    const addExpense = newExpense => {
        console.log(expenses)
        setExpenses([ newExpense,...expenses])
    }
    const deleteExpense = eid => {
        const updatedList = expenses.filter(expense => expense.id !== eid)
        setExpenses(updatedList)
    }
    return (
        <div className='container-fluid'>
            <div className = 'row mx-0 px-1'>
                <div className = 'col-md-12'>
                    <h1 className = 'text-center text-primary display-4 fw-normal'>Expense Tracker</h1>
                    <ExpenseOverview expenses = { expenses } />
                </div>
            </div>
            <div className = 'row mx-0 px-5 mt-5'>
                <div className = 'col-6 mt-1 d-flex flex-column align-items-center '>
                    <h1 className = 'text-center text-primary fs-2'>Add Expense</h1>
                    <ExpenseForm addExpense = { addExpense } />
                </div>
                <div className = 'col-6 mt-1 d-flex flex-column align-items-center '>
                    <h1 className = 'text-center text-primary fs-2'>Transaction History</h1>
                    { expenses &&
                        expenses.map(expense => <ExpenseTransactionDetails key = {expense.id} deleteExpense = {deleteExpense} expense = {expense} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default Four