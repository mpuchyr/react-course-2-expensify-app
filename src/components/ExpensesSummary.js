import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export class ExpensesSummary extends React.Component {
    renderMessage = () => {
        const expenseWord = this.props.expenses.length === 1 ? 'expense' : 'expenses'
        const total = expensesTotal(this.props.expenses)
        const convertedTotal = numeral(total / 100).format('$0,0.00')
        return <h1 className="page-header__title">
            Viewing <span>{this.props.expenses.length}</span> {expenseWord} totalling <span>{convertedTotal}</span>
        </h1>
    }
    
    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    {this.renderMessage()}
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>               
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