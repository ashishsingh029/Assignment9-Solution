const ExpenseOverview = ({ expenses }) => {
    const credits = expenses.filter(expense => expense.type === 'credit')
    const debits = expenses.filter(expense => expense.type === 'debit')
    const totalCredits = credits.reduce((tc, curr) => tc + Number(curr.amount), 0)
    const totalDebits = debits.reduce((td, curr) => td + Number(curr.amount), 0)
    return (
        <div className = 'container-fluid'>
            <div className = 'row g-2'>
                <div className = 'col md-6 text-center py-2 text-success border border-dark border-2 rounded-1 me-2'>
                    <p className='mb-0 fw-bold fs-3'>Total Credits</p>
                    <p className='mb-0 fw-bold fs-2'> ₹{ totalCredits } </p>
                </div>
                <div className = 'col md-6 text-center py-2 text-danger border border-dark border-2 rounded-1 ms-2'>
                    <p className = 'mb-0 fw-bold fs-3' >Total Debits</p>
                    <p className='mb-0 fw-bold fs-2'> ₹{ totalDebits } </p>
                </div>
            </div>
        </div>
    )
}
export default ExpenseOverview