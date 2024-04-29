import React, { useRef } from 'react'
const ExpenseForm = ({ addExpense }) => {
    const descriptionRef = useRef(null)
    const amountRef = useRef(null)
    const dateRef = useRef(null)
    const typeRef = useRef(null)
    const submitHandler = event => {
        event.preventDefault()
        const newExpense = {
            id: new Date().getTime(),
            description: descriptionRef.current.value,
            amount: amountRef.current.value,
            date: dateRef.current.value,
            type: typeRef.current.value
        }
        console.log(newExpense)
        addExpense(newExpense)
        descriptionRef.current.value = ''
        amountRef.current.value = ''
        dateRef.current.value = ''
    }
    return (
        <form action = '' method = 'post' onSubmit = { submitHandler } >
            <div className = 'row'>
                <div className = 'col-md-11 mt-3'>
                    <input
                        ref = {descriptionRef}
                        type = 'text'
                        className = 'form-control'
                        placeholder = 'Description'
                        required
                    />
                </div>
                <div className = 'col-md-4 mt-3'>
                    <input
                        ref = {amountRef}
                        type = 'text'
                        className = 'form-control'
                        placeholder = 'Amount'
                        required
                    />
                </div>
                <div className = 'col-md-4 mt-3 p-0'>
                    <input
                        ref = {dateRef}
                        type = 'date'
                        className = 'form-control'
                        required
                    />
                </div>
                <div className = 'col-md-3 mt-3'>
                    <select ref = {typeRef} className = 'form-control' required>
                        <option value = 'debit'>Debit</option>
                        <option value = 'credit'>Credit</option>
                    </select>
                </div>
                <div className = 'col-md-11 mt-3'>
                    <input
                        type = 'submit'
                        value = 'Add Expense'
                        className = 'btn btn-primary w-100'
                    />
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm