const ExpenseTransactionDetails = ({ expense, deleteExpense }) => {
    const { id, description, type, amount, date } = expense
    return (
        <div className={`card w-100 rounded-0 mb-1 bg-${ type === "credit" ? 'success' : 'danger' }-subtle` }>
            <div className="card-body d-flex justify-content-between">
                <div>
                    <p className="fw-semibold mb-0">
                        {description}
                    </p>
                    <p className="fw-semibold mb-0">
                        {`Amount : ${type === 'credit' ? '₹' : '-₹'}${amount}`}
                    </p>
                    <p><strong>On:</strong> {date} </p>
                </div>
                <div>
                    <h5 className = 'ms-auto' role="button" onClick={() => deleteExpense(id)}>
                        X
                    </h5>
                </div>
            </div>
        </div>
    )
}
export default ExpenseTransactionDetails