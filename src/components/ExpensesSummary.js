import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export class ExpensesSummary extends React.Component {
    renderMessage = () => {
        const expenseWord = this.props.expenses.length === 1 ? 'expense' : 'expenses'
        const total = expensesTotal(this.props.expenses)
        const convertedTotal = numeral(total / 100).format('$0,0.00')
        return <h1>Viewing {this.props.expenses.length} {expenseWord} totalling {convertedTotal}</h1>
    }
    
    render() {
        return (
            <div>
                {this.renderMessage()}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);