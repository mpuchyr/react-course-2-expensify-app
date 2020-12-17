export default (expenses) => {
    if (expenses && expenses.length > 0) {
        const amounts = expenses.map(expense => expense.amount)
        const reducer = (total, amount) => total + amount
        return amounts.reduce(reducer)
    }

    return 0;
}